import React, {useEffect, useState} from "react";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer";
import { formatCurrency } from "../../../action/formatPriceAction";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [error, setError] = useState([])
  const navigate = useNavigate()
  const [checkoutInput, setCheckoutInput] = useState({
    name:'',
    email:'',
    phone:'',
    address:'',
    address_city:''
  })

  const handleInput = (e) => {
    e.persist()
    setCheckoutInput({...checkoutInput, [e.target.name] : e.target.value})
  }
  useEffect(() => {
    const data = localStorage.getItem('cart');
    if (data) {
      const totalList = JSON.parse(data).reduce((total, item) => total + item.price * item.quantityCart, 0) 
      setTotalPrice(totalList)
      setItems(JSON.parse(data));
    }
  },[])

const submitOrder = async (e) => {
  e.preventDefault();

  const data = {
      name: checkoutInput.name,
      email: checkoutInput.email,
      phone: checkoutInput.phone,
      address: checkoutInput.address,
      address_city: checkoutInput.address_city,
      items: items.map(item => ({
        id: item.id,
        quantity: item.quantityCart,
        price: item.price,
      })),
  };

  try {
    const res = await axios.post(`/api/order/create`, data);

    if (res.data.status === 200) {
      swal('Đơn hàng được thêm thành công!', res.data.message, 'success');
      setError([]);
      navigate('/notification');
    } else if (res.data.status === 422) {
      swal('Lỗi dữ liệu đầu vào', '', 'error');
      setError(res.data.errors);
    }
  } catch (error) {
    swal('Đã xảy ra lỗi', error.message, 'error');
    console.error('Error submitting order:', error);
  }
};
return(
<section>
{/* <Header /> */}

  <div className="container-fluid pt-5">
  <div className="row px-xl-5">
    <div className="col-lg-8">
      <div className="mb-4">
        <h4 className="font-weight-semi-bold mb-4">Thông tin hóa đơn</h4>
        <div className="row">
          <div className="py-2 col-md-12 form-group">
            <label>Tên người nhận</label>
            <input className="form-control" type="text" onChange={handleInput} value={checkoutInput.name} placeholder="John" name="name" />
            <small className="text-danger">{error.name}</small>
          </div>
         
          <div className="py-2 col-md-12 form-group">
            <label>Email</label>
            <input className="form-control" type="text" onChange={handleInput} value={checkoutInput.email} placeholder="example@email.com" name="email" />
            <small className="text-danger">{error.email}</small>

          </div>
          <div className="py-2 col-md-12 form-group">
            <label>Số điện thoại</label>
            <input className="form-control" type="number" maxLength={10} onChange={handleInput} value={checkoutInput.phone}  placeholder="+123 456 789" name="phone" />
            <small className="text-danger">{error.phone}</small>

          </div>
          <div className="py-2 col-md-6 form-group">
            <label className="mb-1">Địa chỉ nhận</label>
            <input className="form-control" type="text" onChange={handleInput} value={checkoutInput.address} placeholder="123 Street" name="address"/>
            <small className="text-danger">{error.address}</small>

          </div>
          <div className="py-2 col-md-6 form-group">
            <label className="mb-1">Thành phố</label>
            <input className="form-control" type="text" onChange={handleInput} value={checkoutInput.address_city} placeholder="123 Street" name="address_city"/>
            <small className="text-danger">{error.address_city}</small>

          </div>
        </div>
      </div>
     
    </div>
    <div className="col-lg-4">
  <div className="card border-secondary mb-5">
    <div className="card-header bg-secondary border-0">
      <h4 className="font-weight-semi-bold m-0">Thông tin đơn hàng</h4>
    </div>
    <div className="card-body">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">TT</th>
            <th className="text-center">Sản phẩm</th>
            <th className="text-center">Số lượng</th>
            <th className="text-center">Giá</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td className="text-center">{item.quantityCart}</td>
              <td>{formatCurrency(item.price * item.quantityCart)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="card-footer border-secondary bg-transparent">
      <div className="d-flex justify-content-between mt-2">
        <h5 className="font-weight-bold">Tổng tiền:</h5>
        <h5 className="font-weight-bold">{formatCurrency(totalPrice)}</h5>
      </div>
    </div>
  </div>
  <div className="card border-secondary mb-5">
    <div className="card-header bg-secondary border-0">
      <h4 className="font-weight-semi-bold m-0">Phương thức thanh toán</h4>
    </div>
    <div className="card-body">
      <div className="form-group">
        <div className="custom-control custom-radio">
          <input type="radio" className="custom-control-input" name="payment" id="directcheck" checked />
          <label className="custom-control-label" htmlFor="directcheck">Thanh toán sau khi nhận hàng</label>
        </div>
      </div>
      <div className="form-group">
        <div className="custom-control custom-radio">
          <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
          <label className="custom-control-label" htmlFor="banktransfer">Chuyển khoản ngân hàng</label>
        </div>
      </div>
    </div>
    <div className="card-footer border-secondary bg-transparent">
      <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3" onClick={submitOrder}>Đặt hàng</button>
    </div>
  </div>
</div>

  </div>
</div>
{/* <Footer/> */}

</section>
)
}
export default Checkout