import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import anh from "../../../assets/user/image/logo/logodaidien.webp"

import Loading from "../../../component/loading";
const Register = () => {
    const navigate = useNavigate();
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: {}
    });
    const [loading, setLoading] = useState(false);

    const handleInput = (e) => {
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    };

    const registerSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Bắt đầu hiển thị spinner

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password
        };

        try {
            await axios.get('/sanctum/csrf-cookie');
            const res = await axios.post('http://localhost:8100/api/register', data);

            if (res.data.status === 200) {
                localStorage.setItem('getName', res.data.name);
                localStorage.setItem('getEmail', res.data.email);
                swal("Success", res.data.message, "success");
                navigate('/admin');
            } else {
                setRegister({ ...registerInput, error_list: res.data.validation_errors });
            }
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setLoading(false); // Tắt spinner khi quá trình đăng ký kết thúc
        }
    };

    return (
        <div className="container">
            {loading && <Loading loading={loading} />}
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image">
                        <img src={anh} alt="" className="w-100"/>

                        </div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form className="user" onSubmit={registerSubmit}>
                                    <div className="form-group">
                                        <input type="text" onChange={handleInput} value={registerInput.name} className="form-control form-control-user" name="name" id="exampleFirstName" placeholder="Name" />
                                        <span className="text-danger">{registerInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" onChange={handleInput} value={registerInput.email} className="form-control form-control-user" name="email" id="exampleInputEmail" placeholder="Email Address" />
                                        <span className="text-danger">{registerInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" onChange={handleInput} value={registerInput.password} className="form-control form-control-user" name="password" id="exampleInputPassword" placeholder="Password" />
                                        <span className="text-danger">{registerInput.error_list.password}</span>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-user btn-block">
                                        Register Account
                                    </button>
                                    <hr />
                                    <a href="#" className="btn btn-google btn-user btn-block">
                                        <i className="fab fa-google fa-fw" /> Register with Google
                                    </a>
                                    <a href="#" className="btn btn-facebook btn-user btn-block">
                                        <i className="fab fa-facebook-f fa-fw" /> Register with Facebook
                                    </a>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <div className="text-center">
                                    <a className="small" href="login.html">Already have an account? Login!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
