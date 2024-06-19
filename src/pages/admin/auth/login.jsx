import React from "react";
import anh from "../../../assets/user/image/logo/logodaidien.webp"
import { useLoginActions } from "../../../action/authAction";
import Loading from "../../../component/loading";
const Login = () => {
    const { loginInput, loading, handleInput, loginSubmit } = useLoginActions();

    return (
        <div className="container">
            <Loading loading={loading} />
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image" >
                                    <img src={anh} alt="" className="w-100"/>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user" onSubmit={loginSubmit}>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    onChange={handleInput}
                                                    className="form-control form-control-user"
                                                    id="exampleInputEmail"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter your email..."
                                                />
                                                <span className="text-danger">{loginInput.error_list.email}</span>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    onChange={handleInput}
                                                    className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    placeholder="Enter your password..."
                                                />
                                                <span className="text-danger">{loginInput.error_list.password}</span>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck"
                                                    />
                                                    <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>
                                            <hr />
                                            <a href="index.html" className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw" /> Login with Google
                                            </a>
                                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                                            </a>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="register.html">Create an Account!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
