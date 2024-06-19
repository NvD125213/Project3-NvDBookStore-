import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { formatCurrency } from '../../action/formatPriceAction';

const OrderDetailsModal = ({ show, handleClose, orderDetails }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Chi Tiết Đơn Hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Tên Sản Phẩm</th>
              <th>Số Lượng</th>
              <th>Giá/sản phẩm</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails && orderDetails.length > 0 ? (
              orderDetails.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.product_name}</td>
                  <td>{item.quantity}</td>
                  <td>{formatCurrency(item.price)}</td> {/* Sử dụng formatCurrency để định dạng giá */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Không có sản phẩm nào trong đơn hàng này.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderDetailsModal;
