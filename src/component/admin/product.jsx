import React, { useEffect, useState } from "react";
import ModalEditProduct from "../modal/product";
import swal from "sweetalert";
import { useCategoryParentID } from "../../action/categoryAction";
import { getProductWithPaginate } from "../../action/productAction";
import Pagination from "../paginate";
import axios from "axios";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [isShowEdit, setShowEdit] = useState(false);
    const { parentName, selectedCategory, setSelectedCategory } = useCategoryParentID();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 5;
    const [productInput, setProduct] = useState({
        name: '', price: '', quantity: '', description: '', author: '', discount: ''
    });
    const [dataEdit, setDataEdit] = useState({});

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected + 1);
    };
    const [picture, setPicture] = useState(null);

    const handleInput = (e) => {
        setProduct({ ...productInput, [e.target.name]: e.target.value });
    };

    const handleOneImage = (e) => {
        const uploadFile = e.target.files[0];
        setPicture([uploadFile]);
      };
    
    const fetchDataProduct = async () => {
        try {
            const data = await getProductWithPaginate(currentPage, pageSize);
            setProducts(data.products);
            setTotalPages(data.totalPages);

        } catch (error) {
            console.error('Lỗi:', error);
            setProducts([]);
        }
    };
    useEffect(() => {
        fetchDataProduct();
    }, [currentPage, pageSize]);
    const submitProduct = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', picture[0]);
        formData.append('name', productInput.name);
        formData.append('price', productInput.price);
        formData.append('author', productInput.author);
        formData.append('discount', productInput.discount);
        formData.append('quantity', productInput.quantity);
        formData.append('description', productInput.description);
        formData.append('parentID', selectedCategory);

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        axios.post(`/api/product/create`, formData, config).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
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
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Ảnh</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Tác giả</th>

                                <th scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        products.map((item, index) => (
                            <tr key={item.id}>
                              <th scope="row">{(currentPage - 1) * pageSize + index + 1}</th>
                              <td>{item.name}</td>
                              <td>
                                <img src={`http://localhost:8100/${item.image}`} height={100} width={100} className="mw-100" alt="" />
                              </td>
                              <td>{item.price}</td>
                              <td>{item.author}</td>

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
                    <Pagination pageCount={totalPages} onPageChange={handlePageClick} />

                </div>
                <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab">
                    <form onSubmit={submitProduct} encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                            <input type="text" className="form-control" onChange={handleInput} value={productInput.name} name="name" id="name" placeholder="Ghi tên sản phẩm ở đây!" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Giá</label>
                            <input type="number" className="form-control" onChange={handleInput} value={productInput.price} name="price" id="price" placeholder="Ghi giá tiền ở đây!" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">Số lượng</label>
                            <input type="number" className="form-control" onChange={handleInput} value={productInput.quantity} name="quantity" id="quantity" placeholder="Ghi số lượng ở đây!" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Tác giả</label>
                            <input type="text" className="form-control" onChange={handleInput} value={productInput.author} name="author" id="author" placeholder="Ghi tên tác giả ở đây!" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Khuyến mại</label>
                            <input type="number" className="form-control" onChange={handleInput} value={productInput.discount} name="discount" id="discount" placeholder="Ghi số lượng ở đây!" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Ảnh đại diện</label>
                            <input type="file" className="form-control" onChange={handleOneImage} name="image" id="image" accept="image/*" />
                        </div>
                     
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Ghi chú</label>
                            <textarea id="description" className="form-control" name="description" rows="3" onChange={handleInput} value={productInput.description}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="parentID" className="form-label">Danh mục cha</label>
                            <select className="form-select" aria-label="Default select example" name="parentID" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                                <option value="">Danh mục lớn nhất</option>
                                {parentName.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.display_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <ModalEditProduct handleClose={handleClose} show={isShowEdit} dataEdit={dataEdit} option={parentName} loadData={fetchDataProduct} />
        </div>
    );
};

export default Product;
