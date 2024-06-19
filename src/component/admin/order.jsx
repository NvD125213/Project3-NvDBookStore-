import React, {useEffect, useState} from "react";
import OrderDetailsModal from "../modal/orderdetail";
import axios from "axios";
import Pagination from "../paginate";
import swal from "sweetalert";


const Order = () => {  

    const [show, setShow] = useState(false);
    const [orders, SetOrders] = useState([])
    const [ordersConfirm, SetOrdersConfirm] = useState([])

    const [selectedOrder, setSelectedOrder] = useState(null);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [pageConfirm, setPageConfirm] = useState(1);
    const [totalPagesConfirm, setTotalPagesConfirm] = useState(0);
    const pageSize = 10;

    const handleClose = () => setShow(false);
    
    const handlePageClick = ({ selected }) => {
        setPage(selected + 1);
    };
    const handlePageConfirmClick = ({ selected }) => {
        setPageConfirm(selected + 1);
    };
    const fetchOrderUnconfirmed = async () => {
        try {
            const res = await axios.get(`/api/order/getOrderUnconfirmed?page=${page}&pageSize=${pageSize}`) 
            SetOrders(res.data.orders)
            setTotalPages(res.data.totalPages)
        }
        catch(error) {
            console.log('Lỗi: ',error)
        }
    }
  
    useEffect(() => {
        fetchOrderUnconfirmed()
    },  [page, pageSize])

    const fetchOrderConfirmed = async () => {
        try {
            const res = await axios.get(`/api/order/getOrdersCormfirmed?page=${pageConfirm}&pageSize=${pageSize}`) 
            SetOrdersConfirm(res.data.orders)
            setTotalPagesConfirm(res.data.totalPages)
        }
        catch(error) {
            console.log('Lỗi: ',error)
        }
    }
    useEffect(() => {
        fetchOrderConfirmed()
    },  [pageConfirm, pageSize])


    const fetchOrderDetails = async (orderId) => {
        try {
            const res = await axios.get(`/api/order/getOrderDetails/${orderId}`);
            setSelectedOrder(res.data);
            setShow(true); 
        } catch (error) {
            console.error(`Lỗi khi lấy chi tiết đơn hàng ${orderId}:`, error);
        }
    };

    const confirmOrder = async (orderId) => {
        try {
            const res = await axios.post('/api/order/confirmOrder', { orderId });
            if(res.data.status === 200) {
                swal('Hoàn thành', 'Xác nhận đơn hàng thành công', 'success');
                fetchOrderUnconfirmed(); 
                fetchOrderConfirmed()
            }
            else if (res.data.status === 401) {
                swal('Lỗi',res.data.message, 'success');

            }
         
        } catch (error) {
            console.error('Lỗi khi xác nhận đơn hàng:', error);
        }
    }; 

    
    
    return (
        <div className="Container-fluid px-4">
            <h1 className="mt-4">Quản lý đơn hàng</h1>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Chưa xác nhận</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="add-tab" data-bs-toggle="tab" data-bs-target="#add" type="button" role="tab" aria-controls="add" aria-selected="false">Đã xác nhận</button>
                </li>
            </ul>
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
                                    <td>{order.status === 0 ? "Chưa xác nhận" : "Không trạng thái"}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            style={{ marginRight: "10px" }}
                                            onClick={() => fetchOrderDetails(order.id)}
                                        >
                                            Chi tiết đơn hàng
                                        </button>
                                        <button type="button" className="btn btn-danger" onClick={()=>confirmOrder(order.id)}>Xác nhận</button>
                                    </td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination pageCount={totalPages} onPageChange={handlePageClick} />

                </div>
                <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab">
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
                        {ordersConfirm.map((order, index) => (
                                <tr key={order.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.status === 1 ? "Đã xác nhận" : "Không trạng thái"}</td>
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
                    <Pagination pageCount={totalPagesConfirm} onPageChange={handlePageConfirmClick} />      
                 </div>
             
            </div>
            <OrderDetailsModal show={show} handleClose={handleClose} orderDetails={selectedOrder} />

        </div>
    );
};

export default Order;
