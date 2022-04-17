import { Button } from 'bootstrap';
import React from 'react';
import { Col, Form, Row,} from 'react-bootstrap';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css'
const Checkout = () => {
    const handleSubmit =(event)=> {
        event.preventDefault();
        toast('Checkout Done,Thank you');
        
    }
    return (
        <div className='checkout-form'>
            <h1 className='mb-5'>Give Your Information for Checkout</h1>
    <Form onSubmit={handleSubmit}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" required/>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Enter your Current Address" required/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control required/>
        </Form.Group>
                    
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Division</Form.Label>
      <Form.Control required/>
    </Form.Group>


    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control required/>
    </Form.Group>
  </Row>

                <button className='btn btn-success'>Submit</button>
                <ToastContainer />
</Form>
        </div>
    );
};

export default Checkout;