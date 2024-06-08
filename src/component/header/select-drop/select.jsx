import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../select-drop/select.css'
const Select = () => {
    return (
        <div className="select-drop">
            <span>Danh mục</span> 
            <div className="select-drop-option cursor position-absolute">
            <div className="select-drop-search-field align-self-center">
                <input type="text" className=" d-flex align-items-center" />
                <ul>
                    <li>Sách giáo khoa</li>
                    <li>Sách tham khảo</li>
                    <li>Truyện tranh</li>
                    <li>Tiểu thuyết</li>
                    <li>Chính trị</li>
                    <li>Sách tham khảo</li>
                    <li>Truyện tranh</li>
                    <li>Tiểu thuyết</li>
                </ul>
            </div>
            
        </div>
        </div>
        
    )
} 

export default Select