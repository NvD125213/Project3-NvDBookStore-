import React, { useState } from "react";
import '../select-drop/select.css';
import Down from '../../../assets/user/image/logo/down.png';

const Select = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState('Danh mục');
    const [listData, setListData] = useState(data) 
    const [listData2, setListData2] = useState(data)
    const openSelect = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const closeSelect = (index, name) => {
        setSelectedIndex(index);
        setOpen(false);
        setSelectedItem(name);
    };

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        const list = listData2.filter((item) => {
            return item.toLowerCase().includes(keyword)
        })
        const list2 = list.filter((index, item) => list.indexOf(index) === item)
        setListData(list2)
    };

    return (
        <div className="select-drop">
            <span onClick={openSelect}>
                {selectedItem.length > 14 ? selectedItem.substring(0, 10) + '...' : selectedItem}
                <img src={Down} alt="" style={{ width: '20px', height: '20px', marginLeft: '12px' }} />
            </span>
           
            {open && (
                <div className="select-drop-option cursor position-absolute">
                    <div className="select-drop-search-field align-self-center">
                        <input type="text" className="d-flex align-items-center" onChange={filterList} />
                        <ul>
                            {listData.map((item, index) => (
                                <li 
                                    key={index} 
                                    onClick={() => closeSelect(index, item)} 
                                    className={selectedIndex === index ? 'active' : ''}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Select;
