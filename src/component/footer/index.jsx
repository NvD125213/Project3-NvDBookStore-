import React from "react";
import './style.css'
import fb from '../../assets/user/image/footer/facebook-icon.webp'
import insta from  '../../assets/user/image/footer/instagram-icon.webp'
import laza from  '../../assets/user/image/footer/lazada-icon.webp'
import shoppe from  '../../assets/user/image/footer/shopee-icon.webp'
import tiktok from  '../../assets/user/image/footer/tiktok-icon.webp'
import logo from '../../assets/user/image/logo/logodaidien.webp'

const Footer = () => {
    return (
        <section className="footer"> 
            <div className="social-marketting">
                <div className="container social-marketting-content">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="social">
                                <a href=""><img className="mw-100" src={fb} alt="" /></a>
                                <a href=""><img className="mw-100" src={insta} alt="" /></a>
                                <a href=""><img className="mw-100" src={laza} alt="" /></a>
                                <a href=""><img className="mw-100" src={shoppe} alt="" /></a>
                                <a href=""><img className="mw-100" src={tiktok} alt="" /></a>

                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="email-mkt">
                                <h4>Nhận thông tin khuyến mại của chúng tôi </h4>
                                <div className="mail-chipm">
                                <form action="" className="newsletter-form" id="mc-form">
                                    <input type="text" placeholder="Nhận email ưu đãi..." />
                                    <button className="btn btn-default">Đăng ký</button>
                                </form>
                            </div>
                            </div>
                         
                        </div>

                    </div>
                </div>
            </div>
            <div className="first-footer d-flex">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5 col-12 first-col">
                            <a href="" className="logo">
                                <img src={logo} alt="" className="w-50" />
                                <span>Bởi vì sách là lẽ sống của chúng tôi</span>
                            </a>
                            <ul>
                                <li>
                                    <i className="bi bi-geo-alt"></i><p>
								    Số 59, Đỗ Quang, Trung Hoà, Cầu Giấy, Hà Nội.</p>
                                </li>
                                <li>
                                    <i className="bi bi-info-circle"></i>
                                    <p>ilovejapansong@gmail.com</p>
                                </li>
                                <li>
                                    <i className="bi bi-telephone"></i>
                                    <p>0834802680</p>
                                </li>
                              
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <h4 className="title-menu">Giới thiệu</h4>
                            <ul className="list-menu">
                                <li className="li-menu"><a href="">Về Nhã Nam</a></li>
                                <li className="li-menu"><a href="">Hệ thống hiệu sách</a></li>
                                <li className="li-menu"><a href="">Hệ thống phát hành</a></li>
                                <li className="li-menu"><a href="">Tuyển dụng</a></li>
                                <li className="li-menu"><a href="">Liên hệ với chúng tôi</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12">
                        <h4 className="title-menu">Chính sách</h4>
                            <ul className="list-menu">
                                <li className="li-menu"><a href="">Chính sách bảo mật</a></li>
                                <li className="li-menu"><a href="">Chính sách đổi trả/hoàn tiền</a></li>
                                <li className="li-menu"><a href="">Chính sách thanh toán/vận chuyển</a></li>               
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-12">
                            <h4 className="title-menu">Phương thức thanh toán</h4>
                            <div className="payment">
                                <img src="https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/payment_method.png?1704690471681" alt="" />
                            </div>
                            <div className="payment">
                                <img src="https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/bocongthuong.png?1704690471681" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer