import { createBrowserRouter } from "react-router-dom";
import './App.css';
import AppLayout from "./shared/AppLayout";
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
import Profile from './component/admin/profile';
import User from './component/admin/user';
import Product from './component/admin/product';
import Cart from './pages/user/cart';
import NotFound from './component/NotFound';
import Checkout from './pages/user/checkout';
import Notification from './component/notificate';
import Order from './component/admin/order';
import ListOrderUser from './component/listOrderUser';
import ResultSearch from './component/resultsearch';
import Slider from './component/admin/slider';
import Statistical from "./component/admin/statistical";

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = "application/json";
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.baseURL = 'http://localhost:8100/';

const routers = createBrowserRouter([
    {
        path: '',
        element: (<AppLayout/>),
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Homepage/>,
            },
            {
                path: 'list',
                element: <ListProductPage/>,
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: 'detail',
                element: <ProductDetail/>
            },
            {
                path: 'feedback',
                element: <Review />
            },
            {
                path: 'Notification',
                element: <Notification/>
            },
            {
                path: 'product/:productId',
                element: <ProductDetail/>
            },
            {
                path: 'listOrder', 
                element: <ListOrderUser/>
            },
            {
                path: 'search/:query',
                element: <ResultSearch/>
            },
            {
                path: '404',
                element: <NotFound/>
            },
            {
                path: 'checkout',
                element: <Checkout/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    },
    {
        path: 'admin',
        element: (<PrivateRoute requiredRole={1}/>),
        children: [
            {
                path: '',
                element: (<Admin/>),
                children: [
                    {
                        path: 'category',
                        element: <Category/>
                    },
                    {
                        path: 'product',
                        element: <Product/>
                    },
                    {
                        path: 'profile',
                        element: <Profile/>
                    },
                    {
                        path: 'user',
                        element: <User/>
                    },
                    {
                        path: 'order',
                        element: <Order/>
                    },
                    {
                        path: 'slider',
                        element: <Slider/>
                    },
                    {
                        path: 'statistic',
                        element: <Statistical/>
                    }
                ]
            }
        ]
    }
]);

export default routers;
