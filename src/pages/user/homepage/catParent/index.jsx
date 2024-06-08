import React from "react";
import Slider from "react-slick";
import pic2 from '../../../../assets/user/image/slider/02.jpg'
import './style.css'


const CatParent = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
      };
    return (
        <div className="catParent ms-5 me-2">
            <div className="container-fluid">
              
                <h2 className="hd">
                <i className="bi bi-grid-1x2-fill"></i>
                    Danh sách sản phẩm
                </h2>
                
                
                <Slider {...settings} className="cat_Parent_Main">
                  <div className="item"> <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                  <div className="item"> <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                  <div className="item"> <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                  <div className="item"> <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                  <div className="item"> <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                  <div className="item"> <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                  <div className="item"> 
                  <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                  <div className="item"> <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                  <div className="item"> <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                  <div className="item"> 
                  <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                  <div className="item"> <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                  <div className="item"> <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                  <div className="item"> 
                  <div className="info">
                    <img src={pic2} alt="" />
                    <h5>Tiểu thuyết</h5>
                    <p>26 items</p>
                    </div>
                  </div> 
                 
                </Slider>
            </div>
        </div>
    )
}
export default CatParent;