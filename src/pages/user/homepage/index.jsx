import { memo } from "react";
import HomeSlider from "./slider";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer";
import IconMenu from "./iconmenu";
import Product from "../../../component/product";
import AuthorBook from "./authorBook";
import InfoBookStore from "./info";
import Blog from "./blog";
import './style.css'
import { Link } from "react-router-dom";
const HomePage = () => {
    return(
        <div>
            <Header/>
            <HomeSlider/>
            <IconMenu/>
            <div className="homeProduct ms-5 me-2">
                <div className="container-fluid">
                    <div className="homeProductTitle d-flex justify-content-between">
                        <h2 className="hd"><i className="bi bi-graph-up-arrow"></i>Xu hướng mua sắm</h2>
                        <div className="d-flex flex-row-reverse align-items-center filterTab">
                            <div className="p-2 itemTab"><Link>Mua nhiều</Link></div>
                            <div className="p-2 itemTab"><Link>Sản phẩm mới</Link></div>
                            <div className="p-2 itemTab"><Link>Số lượt theo dõi</Link></div>
                        </div>
                    </div>
                    <div className="productRow d-flex row">
                            <div className="item"><Product/></div>
                            <div className="item"><Product/></div>
                            <div className="item"><Product/></div>
                            <div className="item"><Product/></div>
                            <div className="item"><Product/></div>
                            <div className="item"><Product/></div>
                            <div className="item"><Product/></div>
                        </div>
                   
                </div>
            </div>

            <AuthorBook/>
            <InfoBookStore/>
            <Blog/>
            <Footer/>

        </div>
    )
}

export default memo(HomePage)