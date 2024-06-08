import React from "react";
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";

const label = {inputProps: {'aria-label':'Checkbox demo'}}
const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="card border-0 shadow">
                <h4>DANH MỤC LỚN</h4>
                <div className="catList">
                    <div className="catItem d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 ml-3 mr-3">Hư cấu</h5>
                        <span className="d-flex align-items-center rounded-circle ml-auto justify-content-center ">30</span>
                    </div>
                    <div className="catItem d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 ml-3 mr-3">Phi hư cấu</h5>
                        <span className="d-flex align-items-center rounded-circle ml-auto justify-content-center ">90</span>
                    </div>
                    <div className="catItem d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 ml-3 mr-3">Thiếu nhi</h5>
                        <span className="d-flex align-items-center rounded-circle ml-auto justify-content-center ">70</span>
                    </div>
                    <div className="catItem d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 ml-3 mr-3">Phân loại khác</h5>
                        <span className="d-flex align-items-center rounded-circle ml-auto justify-content-center ">110</span>
                    </div>
                   

                </div>
            </div>

            <div className="card border-0 shadow">
                <h4>MỨC GIÁ</h4>
                <ul className="filters">
                    <li><Checkbox {...label} />0 - 100.000đ</li>
                    <li><Checkbox {...label} />100.000đ - 300.000đ</li>
                    <li><Checkbox {...label} />300.000đ - 500.000đ</li>
                    <li><Checkbox {...label} />Trên 500.000đ</li>
                </ul>
                <h3>Tags</h3>
                <ul className="filters">
                    <li><Checkbox {...label} />Comedy</li>
                    <li><Checkbox {...label} />Shonen</li>
                    <li><Checkbox {...label} />Drama</li>
                    <li><Checkbox {...label} />Actions</li>
                    <li><Checkbox {...label} />Fantasy</li>
                    <li><Checkbox {...label} />Sci Fi</li>
                </ul>

                <div className="d-flex">
                    <Button className="btn btn-g"> 
                    Tìm kiếm</Button>
                </div>
            </div>
        </div>
    )
}
export default Sidebar