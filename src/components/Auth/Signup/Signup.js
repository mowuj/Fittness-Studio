import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        others:""
    })
    return (
        <div className="login-container">
            <div className="login-title">Sign up</div>
            <form className="login-form">
                <input type="text" placeholder="Your Email" />
                
                <div className="relative">
                    <input type="password" placeholder="password"  />
                    <p className="absolute top-3 right-5">🔥</p>
                </div>
                <input
                    type="password"
                    placeholder="confirm password"
                />

                <button>Sign up</button>

                {/* {error && <p className="error-message">{error}</p> } */}
                {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
                <ToastContainer />
            </form>
        </div>
    );
};

export default Signup;