import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import { addToCart } from "../../store/cart.atom";
import { formatCurrency } from "../../action/formatPriceAction";
const Product = ({ product }) => {
    
    return (
        <div className="productThumb">
            <Link to={`/product/${product.id}`}>
                <div className="imgWrapper">
                    <img src={`http://localhost:8100/${product.image}`} className="w-100" alt={product.name} height={260} />
                </div>
            </Link>
         
            <div className="info">
                <h4 className="title">{product.name}</h4>
                <div className="d-flex align-items-center">
                    <span className="price">{formatCurrency(product.price - (product.price * product.discount / 100))}</span>
                    <span className="discount">{product.discount}%</span>
                    <button type="button" style={{marginLeft: '10px'}} onClick={() => addToCart(product.id, 1)} class="btn btn-success">Giỏ hàng</button>

                </div>
                <div className="oldPrice">{formatCurrency(product.price)}</div>
            </div>
            
        </div>
    );
}

export default Product;
