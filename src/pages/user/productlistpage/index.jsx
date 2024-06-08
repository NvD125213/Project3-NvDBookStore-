import React from "react";
import { useState } from "react";
import './style.css'
import { Link } from "react-router-dom";
import Product from "../../../component/product";
import Sidebar from "../../../component/sidebar";
import DropdownComponent from "../../../component/dropdown";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer";


const ListProductPage = () => {
    const [productCount, setProductCount] = useState('Show sản phẩm');
    const [sortOrder, setSortOrder] = useState('Sắp xếp theo');
  
    const handleProductCountSelect = (eventKey) => {
      setProductCount(eventKey);
    };
  
    const handleSortOrderSelect = (eventKey) => {
      setSortOrder(eventKey);
    };
  
    const productCountItems = [
      { label: '10 sản phẩm', value: '10' },
      { label: '20 sản phẩm', value: '20' },
      { label: '50 sản phẩm', value: '50' },
    ];
  
    const sortOrderItems = [
      { label: 'Thấp đến cao', value: 'Thấp đến cao' },
      { label: 'Cao đến thấp', value: 'Cao đến thấp' },
      { label: 'Mới ra mắt!', value: 'Mới ra mắt' },
    ];
    return (
       <div>
        <Header/>
         <section className="wrapperMain_content">
            <div className="container-fluid">
            <div className="breadcumbWrapper">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link>Home</Link></li>
                    <li className="breadcrumb-item"><Link>Tìm kiếm</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                  </ol>
                </nav>
            </div>
                <div className="list_data">
                    <div className="row">
                        <div className="sidebarWrapper col-md-3">
                            <Sidebar/>
                        </div>
                        <div className="rightContent col-md-9 homeProduct pt-0">
                            <div className="topStrip d-flex align-items-center justify-content-between">
                                <p className="mb-0">Có <span className="text-success">29</span> sản phẩm cho bạn!</p>
                                <div className="ml-auto d-flex align-items-center">
                                    <div className="tab_ position-relative">
                                        <DropdownComponent
                                          title={productCount}
                                          items={productCountItems}
                                          onSelect={handleProductCountSelect}
                                        />                                    
                                    </div>
                                    <div className="tab_ ml-3">
                                        <DropdownComponent
                                          title={sortOrder}
                                          items={sortOrderItems}
                                          onSelect={handleSortOrderSelect}
                                        />
                                    </div>
                                </div>
                            </div>
                           
                            <div className="productRow d-flex row">
                                <div className="item"><Product/></div>
                                <div className="item"><Product/></div>
                                <div className="item"><Product/></div>
                                <div className="item"><Product/></div>
                                <div className="item"><Product/></div>
                                <div className="item"><Product/></div>
                                <div className="item"><Product/></div>
                                <div className="item"><Product/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
        <Footer/>
       </div>
    )
}
export default ListProductPage
