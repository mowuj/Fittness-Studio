import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Signup = () => {
    const navigate = useNavigate();
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const navigateLogin = () => {
        navigate('/home')
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        console.log(user);
    }
    const handleSignUp = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPass = event.target.confirmPass.value;
        
        await createUserWithEmailAndPassword(email,password)
        
        navigate('/login');
    }
    return (
        <div className="login-container">
            <div className="login-title">Sign up</div>
            <form className="login-form" onSubmit={handleSignUp}>
                <input name="email" type="text" placeholder="Your Email" />
                
                <div className="relative">
                    <input name='password' type="password" placeholder="password"  />
                    <p className="absolute top-3 right-5">🔥</p>
                </div>
                <input
                    name='confirmPass'
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