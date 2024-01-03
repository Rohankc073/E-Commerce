// import React, { useState } from 'react';
import '../../styles/adminlogin.css'; // Import your stylesheet if needed

const Adminlogin = () => {
    return (
        <div className="contain"> {/* Add or adjust the container class based on your needs */}
            <div id="form-ui">
                <form action="" method="post" id="form">
                    <div id="form-body">
                        <div id="welcome-lines">
                            <div id="welcome-line-1">Thrifty Tech</div>
                            <div id="welcome-line-2">Welcome Back</div>
                        </div>
                        <div id="input-area">
                            <div className="form-inp">
                                <input placeholder="Email Address" type="text" />
                            </div>
                            <div className="form-inp">
                                <input placeholder="Password" type="password" />
                            </div>
                        </div>
                        <div id="submit-button-cvr">
                            <button id="submit-button" type="submit">
                                Login
                            </button>
                        </div>
                        <div id="bar"></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Adminlogin;
