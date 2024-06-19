import React, {useEffect, useState} from "react";
import OrderDetailsModal from "../modal/orderdetail";
import axios from "axios";
import Pagination from "../paginate";
import swal from "sweetalert";
import Header from "../header/header";
import Footer from "../footer";
import { Link } from "react-router-dom";


const ListOrderUser = () => {  

    const [show, setShow] = useState(false);
    const [orders, SetOrders] = useState([])
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 10;

    const handleClose = () => setShow(false);
    
    const handlePageClick = ({ selected }) => {
        setPage(selected + 1);
    };

    const fetchOrder = async () => {
        try {
            const res = await axios.get(`/api/order/getOrderByUser?page=${page}&pageSize=${pageSize}`) 
            SetOrders(res.data.orders)
            setTotalPages(res.data.totalPages)
        }
        catch(error) {
            console.log('Lỗi: ',error)
        }
    }
    const fetchOrderDetails = async (orderId) => {
        try {
            const res = await axios.get(`/api/order/getOrderDetails/${orderId}`);
            setSelectedOrder(res.data);
            setShow(true); 
        } catch (error) {
            console.error(`Lỗi khi lấy chi tiết đơn hàng ${orderId}:`, error);
        }
    };

    useEffect(() => {
        fetchOrder()
    },  [page, pageSize])
  

    return (
        <section>
        {/* <Header/> */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link>Home</Link></li>
                  <li className="breadcrumb-item"><Link>User</Link></li>
                  <li className="breadcrumb-item"><Link>Danh sách đơn hàng</Link></li>
                </ol>
            </nav>
          <div className="container px-4">

                    <h1 className="mt-4">Danh sách đơn hàng</h1>
                   
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Số điện thoại</th>
                                        <th scope="col">Trạng thái</th>
                                        <th scope="col">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {orders.map((order, index) => (
                                <tr key={order.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.status === 0 ? "Chưa xác nhận" : "Đã xác nhận"}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            style={{ marginRight: "10px" }}
                                            onClick={() => fetchOrderDetails(order.id)}

                                        >
                                            Chi tiết đơn hàng
                                        </button>
                                    </td>
                                </tr>
                                ))}
                                </tbody>
                            </table>
                            <Pagination pageCount={totalPages} onPageChange={handlePageClick} />
                        </div>


                    </div>

            <OrderDetailsModal show={show} handleClose={handleClose} orderDetails={selectedOrder} />
            </div>
        {/* <Footer/> */}
        </section>
      
    );
};

export default ListOrderUser;
