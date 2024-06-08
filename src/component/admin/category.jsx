import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { categories } from "../../store/category.atom";
import { fetchCategories } from "../../action/categoryAction";
import Pagination from "../paginate";
const Category = () => {
    const [categoryState, setCategoryState] = useRecoilState(categories);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 10; // Số lượng mục trên mỗi trang

    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchCategories(currentPage, pageSize);
            setCategoryState(data.categories);
            setTotalPages(data.totalPages);
        };
        loadCategories();
    }, [currentPage, pageSize, setCategoryState]);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected + 1); 
    };
    return (
        <div className="Container-fluid px-4">
            <h1 className="mt-4">Danh mục</h1>
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
                                <th scope="col">Tên danh mục</th>
                                <th scope="col">Danh mục con</th>
                                <th scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryState.map((category, index) => (
                                <tr key={category.id}>
                                    <th scope="row">{(currentPage - 1) * pageSize + index + 1}</th>
                                    <td>{category.name}</td>
                                    <td>{category.parentName}</td>
                                    <td>
                                        <button type="button" className="btn btn-success" style={{ marginRight: "10px" }}>Sửa</button>
                                        <button type="button" className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination pageCount={totalPages} onPageChange={handlePageClick} />

                   
                </div>
                <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab">
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Tên danh mục</label>
                            <input type="text" className="form-control" name="name" id="category" placeholder="Ghi tên danh mục ở đây!" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Danh mục con</label>
                            <select className="form-select" aria-label="Default select example" name="parentID">
                                <option defaultValue="0">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Category;
