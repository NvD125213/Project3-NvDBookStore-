import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { categories } from "../../store/category.atom";
import { loadingState } from "../../store/loading.atom";
import { fetchCategories, useCategoryParentID, addCategory, updateCategory, deleteCategory } from "../../action/categoryAction";
import Pagination from "../paginate";
import Loading from "../loading";
import ModalEditCategory from "../modal/category";
import swal from "sweetalert";

const Category = () => {
    const [categoryState, setCategoryState] = useRecoilState(categories);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 5;

    const { parentName, selectedCategory, setSelectedCategory } = useCategoryParentID();

    const [isShowEdit, setShowEdit] = useState(false);
    const [dataEdit, setDataEdit] = useState({});

    const handleClose = () => {
        setShowEdit(false);
    };

    const handleEdit = (cate) => {
        setDataEdit(cate);
        setShowEdit(true);
    };

    const loadCategories = async () => {
        try {
            const data = await fetchCategories(currentPage, pageSize);
            setCategoryState(data.categories);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error("Lỗi khi tải danh mục:", error);
        } 
    };

    useEffect(() => {
        loadCategories();
    }, [currentPage, pageSize]);
    

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const parentID = formData.get("parentID");

        try {
            await addCategory({ name, parentID });
            await loadCategories();
        } catch (error) {
            console.error("Lỗi khi thêm danh mục:", error);
            alert("Đã xảy ra lỗi khi thêm danh mục. Vui lòng thử lại sau.");
        } 
    };

    const handleSave = async (id, name, parentID) => {
        try {
            await updateCategory(id, name, parentID);
            await loadCategories();
            handleClose();
        } catch (error) {
            console.error("Error updating category", error);
        }
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
            try {
                await deleteCategory(id);
                await loadCategories();
                swal('Đã xóa!', 'Danh mục đã được xóa', 'success');
            } catch (error) {
                console.error("Lỗi khi xóa danh mục:", error);
                swal('Lỗi!', 'Đã xảy ra lỗi khi xóa danh mục. Vui lòng thử lại sau.', 'error');
            } 
        }
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
                                <th scope="col">Danh mục cha</th>
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
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            style={{ marginRight: "10px" }}
                                            onClick={() => handleEdit(category)}
                                        >
                                            Sửa
                                        </button>
                                        <button type="button" onClick={() => handleDelete(category.id)} className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination pageCount={totalPages} onPageChange={handlePageClick} />
                </div>
                <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Tên danh mục</label>
                            <input type="text" className="form-control" name="name" id="category" placeholder="Ghi tên danh mục ở đây!" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="parentCategory" className="form-label">Danh mục cha</label>
                            <select className="form-select" aria-label="Default select example" name="parentID" >
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
            <ModalEditCategory 
                handleClose={handleClose} 
                show={isShowEdit} 
                dataEdit={dataEdit} 
                options={parentName} 
                handleSave={handleSave} 
            />
        </div>
    );
};

export default Category;
