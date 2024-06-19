import { memo, useEffect, useState } from "react";
import HomeSlider from "./slider";
import IconMenu from "./iconmenu";
import AuthorBook from "./authorBook";
import InfoBookStore from "./info";
import Blog from "./blog";
import { Tabs } from 'antd';
import axios from 'axios';
import './style.css';
import Product from "../../../component/product";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState('1');

    const fetchProducts = (type) => {
        axios.get(`/api/product/getTrendyProduct`, {
            params: { type }
        })
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the products!', error);
        });
    };

    useEffect(() => {
        let type;
        switch (activeTab) {
            case '1':
                type = 'latest';
                break;
            case '2':
                type = 'most_viewed';
                break;
            case '3':
                type = 'discount';
                break;
            default:
                type = 'latest';
        }
        fetchProducts(type);
    }, [activeTab]);

    const renderProducts = () => (
        <div className="row">
            {products.map(product => (
                <div key={product.id} className="col-12 col-md-6 col-lg-3 mb-4">
                    <Product product={product} />
                </div>
            ))}
        </div>
    );

    const items = [
        {
            key: '1',
            label: 'Sản phẩm mới ra mắt',
            children: (
                <div className="font-weight-normal" style={{ fontSize: '16px' }}>
                    {products.length > 0 ? renderProducts() : <div>Không có sản phẩm nào</div>}
                </div>
            ),
        },
        {
            key: '2',
            label: 'Nhiều lượt truy cập',
            children: (
                <div className="font-weight-normal" style={{ fontSize: '16px' }}>
                    {products.length > 0 ? renderProducts() : <div>Không có sản phẩm nào</div>}
                </div>
            ),
        },
        {
            key: '3',
            label: 'Giảm giá hot',
            children: (
                <div className="font-weight-normal" style={{ fontSize: '16px' }}>
                    {products.length > 0 ? renderProducts() : <div>Không có sản phẩm nào</div>}
                </div>
            ),
        },
    ];

    return (
        <div>
            <HomeSlider />
            <IconMenu />
            <div className="homeProduct ms-5 me-2">
                <div className="container-fluid">
                    <div className="homeProductTitle d-flex justify-content-between">
                        <h2 className="hd"><i className="bi bi-graph-up-arrow"></i>Xu hướng mua sắm</h2>
                    </div>
                    <div className="productRow d-flex row">
                        <Tabs 
                            defaultActiveKey="1" 
                            style={{ marginLeft: "10px" }} 
                            onChange={setActiveTab} 
                            items={items} 
                        />
                    </div>
                </div>
            </div>
            <AuthorBook />
            <InfoBookStore />
            <Blog />
        </div>
    );
}

export default memo(HomePage);
