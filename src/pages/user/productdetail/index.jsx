import Header from "../../../component/header/header";
import React, { useEffect, useState } from "react";
import Footer from "../../../component/footer";
import { Link, useParams } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
import Slider from "react-slick";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import './style.css';
import { BeatLoader } from "react-spinners";
import { addToCart } from "../../../store/cart.atom";
import { Tabs } from 'antd';
import axios from "axios";
import { formatCurrency } from "../../../action/formatPriceAction";

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`/api/product/getProductDetail/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Lỗi dữ liệu:", error);
            }
        };

        getProduct();
    }, [productId]);

    if (!product) {
        return <div className="d-flex align-items-center"><BeatLoader size={50}/></div>;
    }



    const items = [
        {
            key: '1',
            label: 'Chi tiết sản phẩm',
            children: (
                <div className="font-weight-normal" style={{fontSize: '16px'}}>
                    <h3>Giới thiệu sách</h3>
                    <p>{product.description}</p>
                </div>
            ),
        },
        {
            key: '2',
            label: 'Đánh giá',
            children: (
                <div>
                    <h3>Danh sách đánh giá</h3>
                    <p>Đánh giá của khách hàng...</p>
                </div>
            ),
        },
        {
            key: '3',
            label: 'Thông số chi tiết',
            children: (
               <div className="container mt-4">
                  <h3>Danh sách thông số chi tiết</h3>
                  <ul className="list-group border">
                    <li className="list-group-item"><strong>Tác giả:</strong>{product.author}</li>
                    <li className="list-group-item"><strong>Dịch giả:</strong> Đang cập nhật</li>
                    <li className="list-group-item"><strong>Số trang:</strong> 452</li>
                  </ul>
                </div>

            ),
        },
    ];
   
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
      
    return (
        <section className="detailPage">
            {/* <Header/> */}
            <div className="breadcumbWrapper" style={{backgroundColor: 'rgb(129 255 194)', borderRadius: '15px', marginBottom: '20px', marginTop: '20px'}}>
                    <nav aria-label="breadcrumb" style={{marginLeft: '65px',marginTop: '20px'}}>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link style={{textDecoration: 'none'}}>Home</Link></li>
                            <li className="breadcrumb-item"><Link style={{textDecoration: 'none'}}>{product.name}</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Thông tin chi tiết</li>
                        </ol>
                    </nav>
                </div>
            <div className="container">
                <div className="row">
                    
                        <div className="row">
                            <div className="col-md-5 productImg">
                                <div className="productZoom">
                                    <Slider {...settings} className="home_slider_Main">
                                        <div className="item">
                                            <InnerImageZoom src={`http://localhost:8100/${product.image}`} />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="col-md-7 productInfo">
                                <h1>{product.name}</h1>
                                <div className="d-flex align-items-center">
                                    Tác giả: <span style={{margin: "5px 10px", fontWeight: "600"}}>{product.author}</span>
                                    (<span style={{color: "red", margin: "0 5px"}}>{product.view}</span>views)
                                </div>
                                <div className="priceSec d-flex align-items-center" style={{fontSize: "30px", fontWeight: "600"}}>
                                    <span className="text-g newPrice">{formatCurrency(product.price - (product.price * product.discount)/100 )}</span>
                                    <span className="oldPrice" style={{margin: "10px", textDecoration:"line-through"}}>{formatCurrency(product.price)}</span>
                                </div>
                                <div className="productTag d-flex align-items-center">
                                    <span style={{marginRight: "10px"}}>Tag:</span>
                                    <ul className="d-flex"> 
                                        <li><Link>Comedy</Link></li>
                                        <li><Link>Action</Link></li>
                                        <li><Link>RomCom</Link></li>
                                    </ul>
                                </div>
                                <div className="BoxButtons">
                                    <span>Số lượng còn lại:</span>
                                    <span className="counter-qty" style={{marginLeft: "10px"}}>{product.quantity}</span>
                                    <div className="btn-mua">                                
                                        <button type="submit" className="btn btn-lg btn-gray btn-cart btn_buy add_to_cart" onClick={() => addToCart(product.id, 1)}>Thêm vào giỏ hàng</button>
                                        <button type="button" className="btn btn-lg btn-gray btn_buy btn-buy-now">Mua ngay</button>         
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{padding: '25px'}}>
                            <Tabs defaultActiveKey="1" style={{marginLeft: "10px"}} items={items} />
                        </div>
                    
                </div>
            </div>
            {/* <Footer/> */}
        </section>
    );
}

export default ProductDetail;
