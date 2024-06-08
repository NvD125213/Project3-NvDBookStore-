import React, { useState } from "react";
import Button from '@mui/material/Button';
import '../menu/menu.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
 

const Menu = () => {
    const [openDropDownAccount, setOpenDropDownAccount] = useState(false)

    return(
        <div className="col-sm-5 d-flex bd-highlight justify-content-center ju mb-3 align-self-center" style={{marginTop: '30px'}}>
       
        <div className="p-2 bd-highlight text-center">
            <i className="bi bi-bell"></i>
            <p>Thông báo</p>
        </div>
        <div className="p-2 bd-highlight  text-center">
            <i className="bi bi-cart"></i>
            <p>Giỏ hàng</p>
        </div>
        <div className="p-2 bd-highlight position-relative" onClick={() => setOpenDropDownAccount(!openDropDownAccount)}>
            <div className="menu-icon text-center ">
                <i className="bi bi-person"></i>
                <p>Tài khoản</p>
            </div>
            {openDropDownAccount !== false && 
            <ul style={{listStyle: 'none'}} className="dropdown-menu-account">
            <li>
                <Button><i className="bi bi-person"></i> My account</Button>                 
            </li>
            <li>
               
                <Button> <i className="bi bi-card-list"></i> Danh sách đơn hàng</Button>
            </li>
            <li>
                <Button> <i className="bi bi-ticket-perforated"></i> My voucher</Button>
            </li>
            <li>
               
                <Button>  <i className="bi bi-gear"></i> Cài đặt</Button>
            </li>
            <li>
                
                <Button> <i className="bi bi-box-arrow-right"></i> Đăng xuất</Button>
            </li>

        </ul>
            }
        </div>
        <div className="p-2 bd-highlight text-center">
            <i className="bi bi-three-dots"></i>
            <p>Quốc tịch</p>
        </div>
      
    </div>
    )
}

export default Menu;