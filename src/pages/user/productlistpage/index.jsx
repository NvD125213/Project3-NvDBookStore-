import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css';
import { Link } from "react-router-dom";
import Product from "../../../component/product";
import Sidebar from "../../../component/sidebar";
import DropdownComponent from "../../../component/dropdown";

import Pagination from "../../../component/paginate";
import { PacmanLoader } from "react-spinners";

const ListProductPage = () => {
    const [sortOrder, setSortOrder] = useState('Sắp xếp theo');
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
    const [selectedPriceRange, setSelectedPriceRange] = useState(""); 
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/product/AdvanceSearch`, {
                params: {
                    page: currentPage,
                    pageSize,
                    sortOrder: sortOrder === 'Thấp đến cao' ? 'asc' : 'desc',
                    priceRange: selectedPriceRange 
                }
            });
            setProducts(response.data.products);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching products with pagination:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [currentPage, pageSize, sortOrder, selectedPriceRange]); 

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const handleSortOrderSelect = (eventKey) => {
        setSortOrder(eventKey);
    };

    const handlePriceRangeChange = (selectedRange) => {
        setSelectedPriceRange(selectedRange);
    };

    const sortOrderItems = [
        { label: 'Thấp đến cao', value: 'Thấp đến cao' },
        { label: 'Cao đến thấp', value: 'Cao đến thấp' },
    ];


    return (
        <div>
            <section className="wrapperMain_content">
                <div className="container-fluid">
                <div className="breadcumbWrapper" style={{backgroundColor: 'rgb(129 255 194)', borderRadius: '15px', marginBottom: '20px', marginTop: '20px'}}>
                    <nav aria-label="breadcrumb" style={{marginLeft: '65px',marginTop: '20px'}}>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link style={{textDecoration: 'none'}}>Home</Link></li>
                            <li className="breadcrumb-item"><Link style={{textDecoration: 'none'}}>List</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Thông tin chi tiết</li>
                        </ol>
                    </nav>
                </div>
                    <div className="list_data">
                        <div className="row">
                            <div className="sidebarWrapper col-md-3">
                            <Sidebar onPriceRangeChange={handlePriceRangeChange} />
                            </div>
                            <div className="rightContent col-md-9 homeProduct pt-0">
                                <div className="topStrip d-flex align-items-center justify-content-between">
                                    <p className="mb-0">Có <span className="text-success">{products.length}</span> sản phẩm cho bạn!</p>
                                    <div className="ml-auto d-flex align-items-center">
                                        <div className="tab_ ml-3">
                                            <DropdownComponent
                                                title={sortOrder}
                                                items={sortOrderItems}
                                                onSelect={handleSortOrderSelect}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="productRow d-flex row position-relative">
                                    {loading && (
                                        <div className="overlay_spinner">
                                            <PacmanLoader color="#18ad42" loading={loading} size={100} />
                                        </div>
                                    )}
                                    {products.map((product, index) => (
                                        <div key={index} className="item">
                                            <Product product={product} />
                                        </div>
                                    ))}
                                </div>
                                <Pagination pageCount={totalPages} onPageChange={handlePageClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ListProductPage;
