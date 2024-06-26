import React from "react";
import './style.css'
import Slider from "react-slick";
import tg1 from  '../../../../assets/user/image/author/tg1.webp'
import tg2 from  '../../../../assets/user/image/author/tg2.webp'
import tg3 from  '../../../../assets/user/image/author/tg3.webp'
import tg4 from  '../../../../assets/user/image/author/tg4.webp'
import tg5 from  '../../../../assets/user/image/author/anh5.webp'

const AuthorBook = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,  
        autoplaySpeed: 3000 
      };
     
    return (
        <section className="author_Features">
            <div className="container">
                <div className="title-border">
                    <h2 className="title-module">Các tác giả</h2>
                    <div className="link-more">
                        Xem thêm
                        <i className="bi bi-arrow-right-circle-fill"></i>
                    </div>
                </div>
                <Slider {...settings} className="slider_author_Main">
                    <div className="item-author">
                        <img src={tg1} alt="" className="w-100"/>
                        <h3>C. Dicken</h3>
                    </div>
                    <div className="item-author">
                    <img src={tg2} alt="" className="w-100"/>
                        <h3>Hitler</h3>
                    </div>
                    <div className="item-author">
                    <img src={tg3} alt="" className="w-100"/>
                        <h3>Mailer</h3>
                    </div>
                    <div className="item-author">
                    <img src={tg4} alt="" className="w-100"/>
                        <h3>John</h3>
                    </div>
                    <div className="item-author">
                    <img src={tg5} alt="" className="w-100"/>
                        <h3>Nam</h3>
                    </div>

                </Slider>
            </div>
        </section>
    )
}
export default AuthorBook