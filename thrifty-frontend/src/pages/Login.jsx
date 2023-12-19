import React from 'react'
import "../css/login.css"
const Login = () => {
    return (
        <>
            <div className="login-form">
                {/*<img src="/images/sdfa.png" alt="" />*/}
                <div className="left-section">
                    <h2>Sign In</h2>
                    <form method="post" action="/login">
                        <div className="formAlign">
                            <div className="formGroup">
                                <input
                                    type="text"
                                    id="fullname"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="formGroup">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <a href="/user/forgotpassword" className="forgot">
                                <small>Forgot Password?</small>
                            </a>
                            <button type="submit" className="btn btn-secondary btn-align">
                                Login
                            </button>
                            <p className="ask">
                                Don't Have An Account? <a href="Signup.html">SignUp</a>
                            </p>
                            <p className="ask">
                                Don't Have An Account?{' '}
                                <a href="/admin/adminlogin">Admin</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login