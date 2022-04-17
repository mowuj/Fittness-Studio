import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const { name, price, img,id } = service;
    const navigate = useNavigate();
    const navigateToCheckout = () => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{ name}</h2>
            <p>Price:{ price}</p>
            <button onClick={() => navigateToCheckout(id)} className='btn-primary'>Add to CheckOut List:{name }</button>
            
        </div>
    );
};

export default Service;