import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from './pages/user/homepage';
import ListProductPage from './pages/user/productlistpage';
import Review from './pages/user/review';
import Login from './pages/admin/auth/login';
import Register from './pages/admin/auth/register';
import axios from 'axios';
import ProductDetail from './pages/user/productdetail';
import PrivateRoute from './PrivateRoute';
import Admin from './pages/admin/home';
import Category from './component/admin/category';
import Profile from './component/admin/profile'
import User from './component/admin/user'
import Product from './component/admin/product';
import Cart from './pages/user/cart';
import NotFound from './component/NotFound';
import Checkout from './pages/user/checkout';
import Notification from './component/notificate';
import Order from './component/admin/order';
import ListOrderUser from './component/listOrderUser';
import ResultSearch from './component/resultsearch';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = "application/json";
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.baseURL = 'http://localhost:8100/';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/admin" element={<PrivateRoute requiredRole={1} />}>
          <Route path="/admin" element={<Admin />}>
          <Route path="category" element={<Category />} /> 
          <Route path="product" element={<Product />} /> 
          <Route path="profile" element={<Profile />} /> 
          <Route path="user" element={<User />} />  
          <Route path="order" element={<Order />} />  

        </Route> 
         
        </Route>
        <Route path="/404" element={<NotFound />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route 
          path='/login' 
          element={localStorage.getItem('auth_token') ? <Navigate to='/admin' /> : <Login />} 
        />
        <Route 
          path='/register' 
          element={localStorage.getItem('auth_token') ? <Navigate to='/admin' /> : <Register />} 
        />
        <Route path='/list' element={<ListProductPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detail' element={<ProductDetail />} />
        <Route path='/feedback' element={<Review />} />
        <Route path='/Notification' element={<Notification />} />
        <Route path="/product/:productId" element={<ProductDetail/>} />

        <Route path="/listOrder" element={<ListOrderUser/>} />
        <Route path="/search/:query" element={<ResultSearch/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
