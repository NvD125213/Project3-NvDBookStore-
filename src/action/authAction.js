import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { loginState } from '../store/auth.atom';
import { loadingState } from '../store/loading.atom';

export const useLoginActions = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [loginInput, setLogin] = useRecoilState(loginState);
    const navigate = useNavigate();

    const handleInput = (e) => {
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    };
  

    const loginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        const data = {
            email: loginInput.email,
            password: loginInput.password
        };

        try {
            await axios.get('/sanctum/csrf-cookie');
            const res = await axios.post(`/api/login`, data);

            if (res.data.status === 401) {
                swal("Warning", res.data.message, "warning");
            }
            if (res.data.status === 200) {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.name);
                localStorage.setItem('auth_role', res.data.role);

                swal("Success", res.data.message, "success");
                navigate('/');
           
            } else {
                setLogin({ ...loginInput, error_list: res.data.validation_errors });
            }
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setLoading(false);
        }
    };

    return {
        loginInput,
        loading,
        handleInput,
        loginSubmit
    };
};
export const useLogoutActions = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const navigate = useNavigate();
   
    useEffect(() => {
        const interceptor = axios.interceptors.request.use(
            function(config) {
                const token = localStorage.getItem('auth_token');
                config.headers.Authorization = token ? `Bearer ${token}` : '';
                return config;
            },
            function(error) {
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(interceptor);
        };
    }, []);

    const logoutSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.get('/sanctum/csrf-cookie');
            const res = await axios.post('/api/logout');
            if (res.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                localStorage.removeItem('auth_role');

                if( res.role === 1) {
                    navigate('/login');
                } 
                else {
                    navigate('/')
                }
            }
        } catch (error) {
            console.error("Đăng xuất thất bại:", error);
            swal("Lỗi", "Đăng xuất thất bại. Vui lòng thử lại.", "error");
        } finally {
            setLoading(false);
        }
    };

    return { logoutSubmit, loading };
};