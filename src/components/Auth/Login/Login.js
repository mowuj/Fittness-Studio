import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form">
                <input type="text" placeholder="Your Email" />
                
                <input type="password" placeholder="password" />
                
                <button>Login</button>

                {/* {error && <p className="error-message">{error}</p> } */}
                {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
                <ToastContainer />

                <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
            </form>

            <button>Google</button>
        </div>
    );
};

export default Login;