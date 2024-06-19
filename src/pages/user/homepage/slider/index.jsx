import React, {useState, useEffect} from "react";
import axios from "axios";
import Slider from "react-slick";
import '../slider/index.css'

import { Button } from "@mui/material";


const HomeSlider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await axios.get(`/api/slider/getSlider`);
        setSliders(response.data.sliders);
      } catch (error) {
        console.error('Error fetching sliders:', error);
      }
    };
    fetchSliders();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,  
    autoplaySpeed: 5000 
  };
    return (
        <section className="homeSlider mx-auto">
            <div className="container-fluid">
            <Slider {...settings} className="home_slider_Main">
              {sliders.map((slider, index) => (
              <div key={index} className="item">
                <img src={`http://localhost:8100/${slider.image}`} alt={`Slide ${index}`} className="w-100" />
              </div>
              ))}
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