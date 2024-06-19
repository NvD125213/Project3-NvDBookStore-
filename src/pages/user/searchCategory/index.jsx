import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

import { Link, useParams } from 'react-router-dom';
import Product from '../product';
import { PacmanLoader } from 'react-spinners';


const SearchCategory = () => {
    return(
        <section className="wrapperMain_content">
        <div className="container-fluid">
            <div className="breadcumbWrapper">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/search">Tìm kiếm</Link></li>
                    </ol>
                </nav>
            </div>
            <div className="list_data">
                <div className="row">
                 
                    <div className="rightContent col-md-9 homeProduct pt-0">
                        <div className="topStrip mb-1">
                            <p className="mb-0">Có <span className="text-success"></span> sản phẩm cho bạn!</p>
                        </div>
                        <div className="productRow d-flex row position-relative" style={{marginBottom: '50px'}}>
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}