// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form'; // You might need to install this package
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "../../../Thrifty_Front/frontend/src/css/register.css"
const SignUpForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
    };

    return (
        <div className="login-form">
            <div className="left-section">
                <h2>
                    <span>sign </span>up
                </h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="formGroup">
                        <input type="text" id="name" placeholder="FullName" name="fullname" ref={register({ required: true })} />
                    </div>

                    <div className="formGroup">
                        <input type="email" id="email" placeholder="Email" name="email" ref={register({ required: true })} />
                    </div>

                    <div className="formGroup">
                        <input type="text" id="mobile" placeholder="Phone No." name="mobile_no" ref={register({ required: true })} />
                    </div>

                    <div className="formGroup">
                        <input type="text" placeholder="Address" name="address" ref={register} />
                    </div>

                    <div className="formGroup">
                        <input type="password" id="password" placeholder="Password" name="password" ref={register({ required: true })} />
                    </div>

                    <div className="formGroup">
                        <input type="password" id="cpassword" placeholder="Confirm Password" name="cpassword" ref={register({ required: true })} />
                    </div>

                    <button className="submit-btn" type="submit">
                        submit
                    </button>

                    <p className="ask">
                        Already a member? <a href="login.html">Login</a>
                    </p>
                </form>
            </div>

            <div className="right-section">
                <img src="/images/sdfa.png" alt="" />
            </div>
        </div>
    );
};

export default SignUpForm;
