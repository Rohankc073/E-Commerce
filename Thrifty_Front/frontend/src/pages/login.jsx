import React from 'react';

const LoginPage = () => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>

            <link
                rel="stylesheet"
                href="../css/login.css"
            />
            <script
                src="https://kit.fontawesome.com/b0f0ee728d.js"
                crossOrigin="anonymous"
            ></script>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
            />
            <link
                href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
                rel="stylesheet"
            />
            {/*<link*/}
            {/*    rel="stylesheet"*/}
            {/*    href="path/to/your/css/login.css"*/}
            {/*/>*/}
        </head>

        <body>
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
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossOrigin="anonymous"
        ></script>
        </body>
        </html>
    );
};

export default LoginPage;
