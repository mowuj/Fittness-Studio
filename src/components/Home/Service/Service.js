import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs'
import './Service.css'
const Service = ({service}) => {
    const { name, price, img,id } = service;
    const navigate = useNavigate();
    const navigateToCheckout = () => {
        navigate('/checkout')
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{ name}</h2>
            <p>Price:{ price}</p>
            <button className="service-btn" onClick={ navigateToCheckout}><BsFillCartCheckFill></BsFillCartCheckFill> Add to CheckOut</button>
            
        </div>
    );
};

export default Service;