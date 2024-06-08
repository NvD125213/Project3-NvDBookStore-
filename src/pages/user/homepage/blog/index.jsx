import React from "react";
import './style.css'
import Slider from "react-slick";
import Anh1 from '../../../../assets/user/image/blog/bai1.webp'
import Anh2 from '../../../../assets/user/image/blog/bai2.webp'
import Anh3 from '../../../../assets/user/image/blog/bai3.webp'


const Blog = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        <section className="section_blogs">
            <div className="container">
                <div className="title-blog">
                    <h2 className="title-module">Các bài viết</h2>
                    <div className="link-more">
                        Xem thêm
                        <i className="bi bi-arrow-right-circle-fill"></i>
                    </div>
                </div>
                <Slider {...settings} className="slide-blog-wrap">
                    <div className="item-blog">
                        <img src={Anh1} alt="" className="w-100" />
                        <div className="content-blog">
                            <h3>Tiếng thét câm lặng: Một khám phá sâu sắc 
                                về sự mâu thuẫn giữa cá nhân và xã hội</h3>
                            <p>    
				            Là một trong những nhân vật kiệt xuất của nền văn học Nhật Bản, 
                            Oe Kenzaburo là tác giả của...
                            </p>
                            <span>Thứ Hai, 06/05/2024</span>
                        </div>
                    </div>
                    <div className="item-blog">
                        <img src={Anh2} alt="" className="w-100" />
                            <div className="content-blog">
                                <h3>Tiếng thét câm lặng: Một khám phá sâu sắc 
                                    về sự mâu thuẫn giữa cá nhân và xã hội</h3>
                                <p>    
				                Là một trong những nhân vật kiệt xuất của nền văn học Nhật Bản, 
                                Oe Kenzaburo là tác giả của...
                                </p>
                                <span>Thứ Hai, 06/05/2024</span>
                            </div>
                        </div>
                    <div className="item-blog">
                        <img src={Anh3} alt="" className="w-100" />
                            <div className="content-blog">
                                <h3>Tiếng thét câm lặng: Một khám phá sâu sắc 
                                    về sự mâu thuẫn giữa cá nhân và xã hội</h3>
                                <p>    
				                Là một trong những nhân vật kiệt xuất của nền văn học Nhật Bản, 
                                Oe Kenzaburo là tác giả của...
                                </p>
                                <span>Thứ Hai, 06/05/2024</span>
                            </div>
                        </div>
                    <div className="item-blog">
                        <img src={Anh1} alt="" className="w-100" />
                            <div className="content-blog">
                                <h3>Tiếng thét câm lặng: Một khám phá sâu sắc 
                                    về sự mâu thuẫn giữa cá nhân và xã hội</h3>
                                <p>    
				                Là một trong những nhân vật kiệt xuất của nền văn học Nhật Bản, 
                                Oe Kenzaburo là tác giả của...
                                </p>
                                <span>Thứ Hai, 06/05/2024</span>
                            </div>
                    </div>
                    <div className="item-blog">
                            <img src={Anh1} alt="" className="w-100" />
                            <div className="content-blog">
                                <h3>Tiếng thét câm lặng: Một khám phá sâu sắc 
                                    về sự mâu thuẫn giữa cá nhân và xã hội</h3>
                                <p>    
				                Là một trong những nhân vật kiệt xuất của nền văn học Nhật Bản, 
                                Oe Kenzaburo là tác giả của...
                                </p>
                                <span>Thứ Hai, 06/05/2024</span>
                            </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}
export default Blog