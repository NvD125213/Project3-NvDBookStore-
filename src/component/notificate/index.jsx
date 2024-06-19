import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer";

const Notification = () => {
    return (
        <section>
        {/* <Header/> */}
        <div className="container mt-5">
          <div className="alert alert-success text-center" role="alert">
            <h4 className="alert-heading">Cảm ơn bạn đã mua hàng!</h4>
            <p>Chúng tôi rất cảm kích sự ủng hộ của bạn. Đơn hàng của bạn đã được xác nhận và đang trong quá trình xử lý.</p>
            <hr />
            <p className="mb-0">Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại hỗ trợ khách hàng.</p>
            <Link to='/' className="btn btn-primary mt-3">Quay lại trang chủ</Link>
          </div>
        </div>
        {/* <Footer/> */}
        </section>
    

    )
}

export default Notification