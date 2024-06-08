import React from "react";
import './style.css'
import info1 from '../../../../assets/user/image/info/info1.webp'
import { Button } from "@mui/material";

const InfoBookStore = () => {
    return(
        <section className="section_info">
            <div className="container info-container">
                <div className="row">
                    <div className="col-lg-6 col-12 order-1 order-md-1 order-lg-2">
                        <figure className="d-block">
                            <img src={info1} alt="" className="mw-100" height={386} width={625}/>
                        </figure>
		        	</div>
                    <div className="col-lg-6 col-12 order-2 order-md-2 order-lg-1">
                        <h2>Nhã Nam</h2>
                        <span>Bởi vì sách là cả thế giới</span>
                        <div className="short-content">
					        Nhã Nam, tên đầy đủ là Công ty Cổ phần Văn hóa và Truyền thông Nhã Nam,&nbsp;gia nhập thị trường sách Việt Nam vào tháng 2 năm 2005.
                            Ngay từ cuốn sách đầu tiên, độc giả đã dành sự quan tâm và yêu mến cho một thương hiệu sách mới mẻ mang trong mình khát vọng góp phần tạo lập diện mạo mới cho xuất bản văn học tại Việt Nam.
				
                        </div>
                        <Button>Xem thêm</Button>
		        	</div>
                </div>
            </div>
        </section>
    )
}
export default InfoBookStore