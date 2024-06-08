import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import sach1 from '../../assets/user/image/product/sach1.jpg';


const Product = () => {
    return (
        <div className="productThumb">
            <Link>
                <div className="imgWrapper">
                    <img src={sach1} className="w-100" alt="" />
                </div>
                <div className="overlay">
                    <ul className="d-flex justify-content-between">
                        <li className=""><a href="/cart"><i className="bi bi-bag-check"></i></a></li>
                        <li className=""><a href="/detail"><i className="bi bi-eye"></i></a></li>
                    </ul>
                </div>
            </Link>
         
            <div className="info">
                <h4 className="title">“Chém" Tiếng Anh Không Cần Động Não - Tặng Kèm Bộ Video Luyện Nghe-Nói + Sổ Học Từ Vựng</h4>
                <div className="d-flex align-items-center">
                    <span className="price">78.400đ</span>
                    <span className="discount">-50%</span>
                </div>
                <div className="oldPrice">80.000đ</div>
            </div>
            
        </div>
    )
}
export default Product