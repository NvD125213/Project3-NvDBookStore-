import React, { useState } from "react";
import Button from '@mui/material/Button';
import '../menu/menu.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from "react-router-dom";
import { useLogoutActions } from "../../../action/authAction";

const Menu = () => {
    const [openDropDownAccount, setOpenDropDownAccount] = useState(false);
    const { logoutSubmit } = useLogoutActions();
    
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };
    const handleListOrder = () => {
        navigate('/listOrder');

    }

    return (
        <div className="col-sm-5 d-flex bd-highlight justify-content-center mb-3 align-self-center" style={{marginTop: '30px', cursor: 'pointer'}}>
            <div className="p-2 bd-highlight text-center">
                <i className="bi bi-bell"></i>
                <p>Thông báo</p>
            </div>
            <div className="p-2 bd-highlight text-center" style={{cursor: 'pointer'}}>
                <i className="bi bi-cart"></i>
                <Link to="/cart" style={{color: "black", textDecoration: "none"}}><p>Giỏ hàng</p></Link>
            </div>
            <div className="p-2 bd-highlight position-relative" style={{cursor: 'pointer'}} onClick={() => setOpenDropDownAccount(!openDropDownAccount)}>
                <div className="menu-icon text-center">
                    <i className="bi bi-person"></i>
                    <p>Tài khoản</p>
                </div>
                {openDropDownAccount && (
                    <ul style={{listStyle: 'none'}} className="dropdown-menu-account" >
                        <li>
                            <Button style={{cursor: 'pointer'}}>
                                <i className="bi bi-person"></i>
                                {!!localStorage.getItem('auth_name') ? localStorage.getItem('auth_name') : 'Tên đăng nhập' }
                            </Button>
                        </li>
                        {
                            !!localStorage.getItem('auth_token') ? (
                                <li>
                                <Button style={{cursor: 'pointer'}} onClick={handleListOrder}>
                                    <i className="bi bi-card-list"></i> Danh sách đơn hàng
                                </Button>
                            </li>
                            ) :  ('')
                        }
                       
                        <li>
                            <Button style={{cursor: 'pointer'}}>
                                <i className="bi bi-ticket-perforated"></i> My voucher
                            </Button>
                        </li>
                        <li>
                            <Button style={{cursor: 'pointer'}}>
                                <i className="bi bi-gear"></i> Cài đặt
                            </Button>
                        </li>
                        <li>
                            {!!localStorage.getItem('auth_token') ? 
                                <Button onClick={logoutSubmit} style={{cursor: 'pointer'}}>
                                    <i className="bi bi-box-arrow-right"></i>Đăng xuất
                                </Button> : 
                                <Button onClick={handleLoginClick} style={{cursor: 'pointer'}}>
                                    <i className="bi bi-box-arrow-right"></i>Đăng nhập
                                </Button>
                            }
                        </li>
                    </ul>
                )}
            </div>
            <div className="p-2 bd-highlight text-center">
                <i className="bi bi-three-dots"></i>
                <p>Quốc tịch</p>
            </div>
        </div>
    );
}

export default Menu;
