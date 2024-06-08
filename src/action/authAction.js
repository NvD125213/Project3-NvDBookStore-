import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { loginState } from '../store/auth.atom';
import { loadingState } from '../store/loading.atom';
// Custom hook để xử lý logic login

export const useLoginActions = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [loginInput, setLogin] = useRecoilState(loginState);
    const navigate = useNavigate();

    const handleInput = (e) => {
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    };
  

    const loginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Bắt đầu hiển thị spinner
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
                swal("Success", res.data.message, "success");
                navigate('/admin');
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

    axios.interceptors.request.use(function(config) {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, function(error) {
        return Promise.reject(error);
    });

    const logoutSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.get('/sanctum/csrf-cookie');
            const res = await axios.post('/api/logout');
            if (res.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Thành công", res.data.message, "success");
                navigate('/login');
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