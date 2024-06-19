import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../nav/nav.css';
import { Link } from "react-router-dom";
import { fetchCategoriesUser, fetchSubcategories } from "../../../action/categoryAction";

const Nav = () => {
    const [openNavReview, setOpenNavReview] = useState(false); 
    const [openNavCate, setOpenNavCate] = useState(false); 
    const [listCategory, setListCategory] = useState([]); // Initialize as an array
    const [subcategories, setSubcategories] = useState({});
    const [error, setError] = useState(null);

    const handleMouseEnter = () => {
        setOpenNavReview(true);
    };
    
    const handleMouseLeave = () => {
        setOpenNavReview(false);
    };

    const getSubcategories = async (id) => {
        try {
            const subcategories = await fetchSubcategories(id);
            setSubcategories(prevState => ({ ...prevState, [id]: subcategories }));
        } catch (error) {
            console.error("Error fetching subcategories: ", error);
            setError(error.message);
        }
    };

    useEffect(() => {
        const getCategories = async () => {
            try {
                const categories = await fetchCategoriesUser();
                setListCategory(categories);
                categories.forEach(category => {
                    getSubcategories(category.id);
                });
            } catch (error) {
                console.error("Error fetching categories: ", error);
                setError(error.message);
            }
        };
        getCategories();
    }, []);

    return (
        <div className="nav d-flex align-items-center mx-auto">
            <div className="container-fluid">
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="position-relative row justify-content-center align-items-center">
                    <div className="col-sm-2 d-flex align-items-center parent-container">
                        <button className="btn btn-success" onClick={() => setOpenNavCate(!openNavCate)}>
                            <i className="bi bi-grid-1x2-fill"></i>
                                Tất cả danh mục
                            <i className="bi bi-chevron-down"></i>
                        </button>
                        {openNavCate && 
                            <div className="mega-menu mw-100">
                                <div className="row">
                                    {listCategory.filter(category => category.parentID === null).map((category, index) => (
                                        <div className="col-sm-3" key={index}>
                                            <h4 className="text-success">{category.name}</h4>
                                            <ul className="mt-3 mb-0">
                                                {subcategories[category.id] && subcategories[category.id].length > 0 ? 
                                                    subcategories[category.id].map((subcategory, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link to={subcategory.link}>{subcategory.name}</Link>
                                                        </li>
                                                    ))
                                                    : (
                                                        <li>
                                                            Không có danh mục con
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                    <div className="col-sm-7">
                        <ul className="list list-inline mb-0">
                            <li className="list-inline-item">
                                <Button>
                                    <Link to="/">Trang chủ</Link>
                                </Button>
                            </li>
                            <li className="list-inline-item">
                                <Button>
                                    <Link to="/list">Sản phẩm</Link>
                                </Button>
                            </li>
                            <li className="list-inline-item position-relative"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Button>
                                    <Link to="/review">Review sách
                                        <i className="bi bi-chevron-down"></i>            
                                    </Link>
                                </Button>
                                {openNavReview && 
                                    <ul className="dropdown-menu-review position-absolute">
                                        <li><Button>Review sách của độc giả</Button></li>
                                        <li><Button>Review sách trên báo chí</Button></li>
                                        <li><Button>Biên tập viên giới thiệu</Button></li>
                                    </ul>
                                }
                            </li>
                            <li className="list-inline-item">
                                <Button>
                                    <Link to="/blog">Bài viết</Link>
                                </Button>
                            </li>
                            <li className="list-inline-item">
                                <Button>
                                    <Link to="/author">Tác giả</Link>
                                </Button>
                            </li>
                            <li className="list-inline-item">
                                <Button>
                                    <Link to="/about">Về NvD BookStore</Link>
                                </Button>
                            </li>
                            <li className="list-inline-item">
                                <Button>
                                    <Link to="/contact">Liên hệ</Link>
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-2 d-flex align-items-center">
                        <div className="phNo d-flex align-items-center">
                            <i className="bi bi-headset"></i>
                            <div className="des-phNo">
                                <h4>1900 8088</h4>
                                <p>Luôn phục vụ 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
