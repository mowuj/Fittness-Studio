import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs'
import './Service.css'
const Service = ({service}) => {
    const { name, price, img,description } = service;
    const navigate = useNavigate();
    const navigateToCheckout = () => {
        navigate('/checkout')
    }
    return (
        <div className='service'>
            <img className='w-100 mb-2' height={200} src={img} alt="" />
            <h2>{name}</h2>
            <p>Description:{description}</p>
            <h5>Price:{ price}</h5>
            <button className="service-btn" onClick={ navigateToCheckout}><BsFillCartCheckFill className='mb-2 fs-3'></BsFillCartCheckFill> Add to CheckOut</button>
            
        </div>
    );
};

export default Service;