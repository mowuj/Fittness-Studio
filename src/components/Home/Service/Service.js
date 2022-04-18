import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs'
import './Service.css'
const Service = ({service}) => {
    const { name, price, img } = service;
    const navigate = useNavigate();
    const navigateToCheckout = () => {
        navigate('/checkout')
    }
    return (
        <div className='service'>
            <img className='w-100' height={200} src={img} alt="" />
            <h2>{ name}</h2>
            <p>Price:{ price}</p>
            <button className="service-btn" onClick={ navigateToCheckout}><BsFillCartCheckFill className='mb-2 fs-3'></BsFillCartCheckFill> Add to CheckOut</button>
            
        </div>
    );
};

export default Service;