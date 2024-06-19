import React, { useEffect, useState } from "react";
import ModalEditSlider from "../modal/slider";
import swal from "sweetalert";
import axios from "axios";

const Slider = () => {
    const [sliders, setSliders] = useState([]);
    const [isShowEdit, setShowEdit] = useState(false);
    const [sliderInput, setSlider] = useState({
        link: ''
    });
    const [dataEdit, setDataEdit] = useState({});

    const [picture, setPicture] = useState(null);

    const handleInput = (e) => {
        setSlider({ ...sliderInput, [e.target.name]: e.target.value });
    };

    const handleOneImage = (e) => {
        const uploadFile = e.target.files[0];
        setPicture([uploadFile]);
      };
    
    const fetchDataSlider = async () => {
        const data = await axios.get(`/api/slider/getSlider`) 
        setSliders(data.data.sliders); 
    };
    useEffect(() => {
        fetchDataSlider()
    }, []);
    const submitSlider = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', picture[0]);
        formData.append('link', sliderInput.link);
       
        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        axios.post(`/api/slider/create`, formData, config).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                fetchDataSlider()

            } else {
                swal("Error", res.data.message, "error");
            }
        }).catch(error => {
            swal("Error", "Có lỗi!", "error");
        });
    };

    const handleClose = () => {
        setShowEdit(false);
    };

    const handleEdit = (pr) => {
        setDataEdit(pr);
        setShowEdit(true);
    };

    const handleDelete = async (id) => {
        const willDelete = await swal({
            title: "Xóa danh mục này?",
            text: "Bạn có chắc chắn muốn xóa?",
            icon: "warning",
            buttons: [true, "Xóa!"],
            dangerMode: true,
        });
        if (willDelete) {
            const res = await axios.delete(`/api/slider/delete/${id}`);
            await fetchDataSlider();
            swal("Success", res.data.message, "success");
        }
    };

    return (
        <div className="Container-fluid px-4">
            <h1 className="mt-4">Sản phẩm</h1>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Danh sách</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="add-tab" data-bs-toggle="tab" data-bs-target="#add" type="button" role="tab" aria-controls="add" aria-selected="false">Thêm</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Thời gian tạo</th>
                                <th scope="col">Ảnh</th>
                                <th scope="col">Link</th>
                                <th scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        sliders.map((item, index) => (
                            <tr key={item.id}>
                              <th scope="row">{index + 1}</th>
                              <td>{item.created_at_formatted}</td>
                              <td>
                                <img src={`http://localhost:8100/${item.image}`} height={100} width={100} className="mw-100" alt="" />
                              </td>
                              <td>{item.link}</td>

                              <td>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    style={{ marginRight: "10px" }}
                                    onClick={() => handleEdit(item)}
                                >
                                    Sửa
                                </button>
                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.id)}>Xóa</button>
                              </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                </div>
                <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab">
                    <form onSubmit={submitSlider} encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Ảnh slider</label>
                            <input type="file" className="form-control" onChange={handleOneImage} name="image" id="image" accept="image/*" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Link</label>
                            <input type="text" className="form-control" onChange={handleInput} value={sliderInput.link} name="link" id="link" placeholder="Dán đường link dẫn đến tại đây!" />
                        </div>
                     
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <ModalEditSlider handleClose={handleClose} show={isShowEdit} dataEdit={dataEdit} loadData={fetchDataSlider} />
        </div>
    );
};

export default Slider;
