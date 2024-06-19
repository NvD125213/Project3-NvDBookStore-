import React, { useState, useEffect } from "react";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer";
import { getCartProduct } from "../../../action/productAction";
import { cartState } from "../../../store/cart.atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { formatCurrency } from "../../../action/formatPriceAction";

const Cart = () => {
  const [recoilCart, setRecoilCart] = useRecoilState(cartState);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate()

  const checkAuth = async () => {
    try {
      const response = await axios.get('/api/check-auth', {
        withCredentials: true
      });

      if (localStorage.getItem('auth_token')) {
        navigate('/checkout');
      } else if (response.data.status === 401) {
        alert('Bạn cần đăng nhập để thanh toán!');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      alert('Có lỗi xảy ra khi kiểm tra xác thực.');
      navigate('/login'); 
    }
  };


  useEffect(() => {
    const fetchCartProducts = async () => {
      const storedCart = localStorage.getItem('cart');
      console.log(storedCart)
      if (storedCart) {
        const cartArray = JSON.parse(storedCart);
        const ids = cartArray.map(product => product.id);
        const data = await getCartProduct(ids);
        const dataout = []
        cartArray.forEach(element => {
          data.forEach(
            element2 => {
              if (element.id === element2.id) {
                const fromdata = {
                  id: element.id,
                  name: element2.name,
                  image: element2.image,
                  price: element2.price,
                  quantityCart: element.quantityCart,
                
                }
                dataout.push(fromdata)
              }

            }
          )
        });
        setRecoilCart(dataout);
      }
      
    };

    fetchCartProducts();
  }, [setRecoilCart]);

  useEffect(() => {
    if (Array.isArray(recoilCart) && recoilCart.length > 0) {
      const totalPriceCalculation = recoilCart.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.price * currentItem.quantityCart);
      }, 0);
      setTotalPrice(totalPriceCalculation);
    } else {
      setTotalPrice(0); 
    }
  }, [recoilCart]);



  const removeItemCart = (id) => {
    const updatedData = recoilCart.filter((item) => item.id !== id);
    if (Array.isArray(updatedData)) {
      localStorage.setItem('cart', JSON.stringify(updatedData));
      setRecoilCart(updatedData);

    }

  }

  const updateQuantity = (Id, quantity) => {
    const setUpdate = recoilCart.map(item => {
      if (item.id === Id) {
        return {
          ...item,
          quantityCart: quantity
        };
      }
      return item;
    });
    if (Array.isArray(setUpdate)) {
      localStorage.setItem('cart', JSON.stringify(setUpdate));
      setRecoilCart(setUpdate);
    }
  }
  


  return (
    <section>
      {/* <Header /> */}
      <div className="container-fluid pt-5">
        {Array.isArray(recoilCart) && recoilCart.length < 1 ? (
          <h1>Chưa có sản phẩm nào trong giỏ hàng</h1>
        ) : (
          <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
              <table className="table table-bordered text-center mb-0">
                <thead className="bg-secondary text-dark">
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {recoilCart.map((item, index) => (
                    <tr key={index}>
                      <td className="align-middle">
                        {item.name}
                        <img
                          src={`http://localhost:8100/${item.image}`}
                          alt=""
                          style={{ width: 50 }}
                        />
                      </td>
                      <td className="align-middle">{formatCurrency(item.price)}</td>
                      <td className="align-middle">
                        <div
                          className="input-group quantity mx-auto"
                          style={{ width: 100 }}
                        >
                          <input
                            type="number"
                            className="form-control form-control-sm text-center"
                            value={item.quantityCart}
                            onChange={(e) => updateQuantity(item.id, e.target.value)}

                          />
                        </div>
                      </td>
                      <td className="align-middle">
                        {formatCurrency(item.price * item.quantityCart)}
                      </td>
                      <td className="align-middle">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeItemCart(item.id)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <div className="card mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">Thông tin giỏ hàng</h4>
                </div>
                <div className="card-footer bg-transparent">
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="font-weight-bold">Tổng tiền:</h5>
                    <h5 className="font-weight-bold">{formatCurrency(totalPrice)}</h5>
                  </div>
                  <button type="button" className="btn btn-success" onClick={checkAuth}>
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </section>
  );
}

export default Cart;
