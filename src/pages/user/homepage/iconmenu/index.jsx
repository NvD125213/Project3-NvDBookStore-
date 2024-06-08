import React from "react";
import './style.css'
import { Link } from "react-router-dom";

const IconMenu = () => {
    return (
        <section className="cms-icon-menu">
            <div className="swiper-container container ">
                <div className="row justify-content-md-center">
                <div className="swiper-slide col-sms-3 col-sm-3 col-md-2">
                  <Link><img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/SieuSale_6.6.png" alt="" className="mw-100"/></Link>  
                  <div className="cms-icon-menu-item-name">Siêu sale 6.6</div>
                </div>
                <div className="swiper-slide col-sms-3 col-sm-3 col-md-2">
                  <Link><img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/SaiGonBook_0624.png" alt="" className="mw-100"/></Link> 
                  <div className="cms-icon-menu-item-name">Saigon Book</div>                
                  </div> <div className="swiper-slide col-sms-3 col-sm-3 col-md-2">
                  <Link><img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2024/IconT3_HotWheels_120x120_1.png" alt="" className="mw-100"/></Link>  
                  <div className="cms-icon-menu-item-name">Hot Wheels</div>
                </div> <div className="swiper-slide col-sms-3 col-sm-3 col-md-2">
                  <Link><img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2024/Icon_GiamGia_120x120.png" alt="" className="mw-100"/></Link>  
                  <div className="cms-icon-menu-item-name">Sản Phẩm Được Trợ Giá</div>
                </div> <div className="swiper-slide col-sms-3 col-sm-3 col-md-2">
                  <Link><img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-03-2024/HSO_MangaT324_Icon.png" alt="" className="mw-100"/></Link>  
                  <div className="cms-icon-menu-item-name">Manga</div>
                </div> <div className="swiper-slide col-sms-3 col-sm-3 col-md-2">
                  <Link><img src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_FlashSale_Thuong_120x120.png" alt="" className="mw-100"/></Link>  
                  <div className="cms-icon-menu-item-name">Mã Giảm Giá</div>
                </div> <div className="swiper-slide col-sms-3 col-sm-3 col-md-2">
                  <Link><img src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_MaGiamGia_8px_1.png" alt="" className="mw-100"/></Link>  
                  <div className="cms-icon-menu-item-name">Đồ Chơi</div>
                </div> <div className="swiper-slide col-sms-3 col-sm-3 col-md-2">
                  <Link><img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2024/ChoDoCu.png" alt="" className="mw-100"/></Link>  
                  <div className="cms-icon-menu-item-name">Phiên Chợ sách cũ</div>
                </div>
                <div className="swiper-slide col-sms-3 col-sm-3 col-md-2">
                  <Link><img src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_SanPhamMoi_8px_1.png" alt="" className="mw-100"/></Link>  
                  <div className="cms-icon-menu-item-name">Sản Phẩm sách mới</div>
                </div>
               
                
                </div>
               
            </div>
        </section>
    )
}
export default IconMenu