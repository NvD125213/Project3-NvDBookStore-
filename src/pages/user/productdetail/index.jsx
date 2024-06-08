import Header from "../../../component/header/header";
import React from "react";
import Footer from "../../../component/footer";
import { Link } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
import Slider from "react-slick";
import Sidebar from "../../../component/sidebar";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import './style.css';
import anh1 from '../../../assets/user/image/product/sach1.jpg';
import anh2 from '../../../assets/user/image/product/sach2.jpg';
import anh3 from '../../../assets/user/image/product/sach3.jpg';
import { Tabs } from 'antd';

const ProductDetail = () => {
    const items = [
        {
            key: '1',
            label: 'Chi tiết sản phẩm',
            children: (
                <div>
                    <h3>Giới thiệu sách</h3>
                    <p>Vào những thập niên đầu thế kỷ 20, Nho giáo ở Trung Quốc cũng như ở Việt Nam, sau hàng nghìn năm tồn tại ở địa vị 
                    độc tôn về tư tưởng, chính trị, bắt đầu lung lạc và bị chất vấn hơn bao giờ hết. Các chủ nghĩa, học phái nổi lên ở các 
                    nước Á Đông như Trung Quốc và Việt Nam đều không đứng ngoài những câu hỏi lớn đương thời: Nho giáo đã hết thời hay chưa? 
                    Nên duy trì hay đào thải, dung hòa hay công kích Nho giáo khi mà mưa Âu gió Mỹ đang tràn vào làm thay đổi tận gốc xã hội?
                    </p>
                    <p>
                    Nhằm đưa ra kiến giải riêng, Đào Duy Anh với công trình Khổng giáo phê bình tiểu luận thay vì bàn về Nho giáo nói chung, 
                    đã tập trung đánh giá Nho giáo trong giai đoạn đầu hình thành, tức tư tưởng Nho giáo do chính Khổng tử và các học trò đề xướng. Lựa chọn khác biệt này, kết hợp với nhãn 
                    quan Marxist đang nổi lên như một học thuyết trung tâm lúc bấy giờ, đã đưa đến những phân tích sắc sảo và mới mẻ. Ngày nay, đọc lại công trình 
                    của Đào Duy Anh vẫn là gợi mở đáng giá để có hiểu biết và cư xử phù hợp với một hệ tư tưởng đã ăn sâu bén rễ trong đời sống xã hội Việt Nam.
                    </p>
                    
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
                <div>
                    <h3>Danh sách thông số chi tiết</h3>
                    <ul>
                        <li>Chi tiết 1</li>
                        <li>Chi tiết 2</li>
                        <li>Chi tiết 3</li>
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
            <Header/>
            <div className="breadcumbWrapper">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link>Home</Link></li>
                        <li className="breadcrumb-item"><Link>Tên sản phẩm</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-5 productImg">
                                <div className="productZoom">
                                    <Slider {...settings} className="home_slider_Main">
                                        <div className="item">
                                            <InnerImageZoom src={anh1} />
                                        </div>
                                        <div className="item">
                                            <InnerImageZoom src={anh2} />
                                        </div>
                                        <div className="item">
                                            <InnerImageZoom src={anh3} />
                                        </div>
                                        <div className="item">
                                            <InnerImageZoom src={anh1} />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="col-md-7 productInfo">
                                <h1>KHỔNG GIÁO PHÊ BÌNH TIỂU LUẬN</h1>
                                <div className="d-flex align-items-center">
                                    Tác giả: <span style={{margin: "5px 10px", fontWeight: "600"}}>ĐÀO DUY ANH</span>
                                    (<span style={{color: "red", margin: "0 5px"}}>32</span>views)
                                </div>
                                <div className="priceSec d-flex align-items-center" style={{fontSize: "30px", fontWeight: "600"}}>
                                    <span className="text-g newPrice">59.500đ</span>
                                    <span className="oldPrice" style={{margin: "10px", textDecoration:"line-through"}}>90.000đ</span>
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
                                    <span className="counter-qty" style={{marginLeft: "10px"}}>50 sản phẩm</span>
                                    <div className="btn-mua">                                
                                        <button type="submit" className="btn btn-lg btn-gray btn-cart btn_buy add_to_cart">Thêm vào giỏ hàng</button>
                                        <button type="button" className="btn btn-lg btn-gray btn_buy btn-buy-now">Mua ngay</button>         
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{padding: '25px'}}>
                            <Tabs defaultActiveKey="1" style={{marginLeft: "10px"}} items={items} />
                        </div>
                    </div>
                    <div className="col-md-3 sidebarWrapper">
                        <Sidebar/>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
}

export default ProductDetail;
