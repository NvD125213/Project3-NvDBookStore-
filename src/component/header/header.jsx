import React, { useState } from 'react';
import Logo from '../../assets/user/image/logo/logodaidien.webp';
import Search from '../../assets/user/image/logo/search.png';
import '../header/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from './select-drop/select';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from '../header/menu/menu';
import Nav from './nav/nav';
const Header = () => {
    const [categories] = useState([
        'Danh mục',
        'Sách tham khảo',
        'Sách sử thi',
        'Tiểu thuyết',
        'Truyện tranh'
    ]);

    return (
        <header>
            <div className='container'>
                <div className="row justify-content-md-center">
                    <div className="col-sm-2">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="col-sm-5 d-flex align-self-center">
                        <div className="header-search d-flex align-items-center">
                            <Select data={categories} />
                            <div className="search">
                                <input type="text" placeholder='Nhập từ khóa tìm kiếm...' />
                                <img src={Search} alt="Search Icon" />
                            </div>
                        </div>
                    </div>
                    <Menu />
                </div>
            </div>

            <Nav/>
        </header>
    );
};

export default Header;
