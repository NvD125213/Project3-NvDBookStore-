import React from "react";
import Slider from "react-slick";
import '../slider/index.css'
import pic1 from '../../../../assets/user/image/slider/01.jpg'
import pic2 from '../../../../assets/user/image/slider/02.jpg'
import pic3 from '../../../../assets/user/image/slider/03.jpg'
import { Button } from "@mui/material";


const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    arrows: true,
    slidesToScroll: 1,
  };
    return (
        <section className="homeSlider mx-auto">
            <div className="container-fluid">
                <Slider {...settings} className="home_slider_Main">
                    <div className="item">
                      <img src={pic1} alt="" className="w-100" />
                      <div className="info">
                        <h2 className="mb-4">Đừng bỏ lỡ bất cứ voucher nào!</h2>
                        <p className="mb-65">Giảm giá 50% cho đơn hàng đầu tiên</p>

                      </div>
                    </div>
                    <div className="item">
                      <img src={pic2} alt="" className="w-100" />
                      <div className="info">
                        <h2 className="mb-4">Đừng bỏ lỡ bất cứ voucher nào!</h2>
                        <p className="mb-65">Giảm giá 50% cho đơn hàng đầu tiên</p>
                      </div>
                    </div>
                    <div className="item">
                      <img src={pic3} alt="" className="w-100" />
                      <div className="info">
                        <h2 className="mb-4">Đừng bỏ lỡ bất cứ voucher nào!</h2>
                        <p className="mb-65">Giảm giá 50% cho đơn hàng đầu tiên</p>

                      </div>
                    </div>
                   
                </Slider>
                <div className="newBetterBanner">
                  <i className="bi bi-send"></i>
                  <input type="text" placeholder="Nhập Email của bạn..."/>
                  <Button className="bg-g">Subscribe</Button>

                </div>
            </div>
        </section>
    )
}
export default HomeSlider