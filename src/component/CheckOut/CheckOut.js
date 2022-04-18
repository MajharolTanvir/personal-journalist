import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const notify = () => toast("Thanks for checkout");


    const handlaChekout = event => {
        event.preventDefault()
        notify();
    }
    return (
        <div className='bg-gradient-to-b from-black to-teal-400 text-white'>
            <div className='container py-10 h-screen pt-20'>
                <Form className='w-8/12 mx-auto shadow-2xl shadow-teal-400 p-10 border-4 border-teal-400 rounded-md '>
                    <Row className="mb-3">
                        <Col>
                            <Form.Label>First name</Form.Label>
                            <Form.Control type='text' placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type='text' placeholder="Last name" />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="" />
                    </Form.Group>
                    <Button onClick={handlaChekout} className='w-80 mx-auto' variant="primary" type="submit">
                        Submit
                    </Button>
                    <ToastContainer />
                </Form>
            </div>
        </div>
    );
};

export default CheckOut;