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

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = "application/json";
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.baseURL = 'http://localhost:8100/';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/admin" element={<PrivateRoute />}>
          <Route index element={<Admin />} /> 
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Admin />} />
            <Route path="category" element={<Category />} /> 
            <Route path="profile" element={<Profile />} /> 
            <Route path="user" element={<User />} /> 

          </Route>
        </Route>
        <Route 
          path='/login' 
          element={localStorage.getItem('auth_token') ? <Navigate to='/admin' /> : <Login />} 
        />
        <Route 
          path='/register' 
          element={localStorage.getItem('auth_token') ? <Navigate to='/admin' /> : <Register />} 
        />
       
        <Route path='/list' element={<ListProductPage />} />
        <Route path='/detail' element={<ProductDetail />} />
        <Route path='/feedback' element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
