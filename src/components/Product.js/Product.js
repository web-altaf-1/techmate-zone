import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const navigate = useNavigate();
    const { _id, name , img,description , price ,minOrder ,available} = props.product;
    const handleConfirmOrder= id =>{
        navigate(`/confirmPurchage/${id}`)
    }
    return (
        <Card>
            <Card.Img className='d-flex mx-auto w-75
            ' style={{width:'200px',height:'auto'}} variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <small>{description.slice(0,60)}...</small>
                    <h5 className='fw-bold my-3'>Price:${price}</h5>
                    <strong>Minimum Order Quantity:{minOrder}</strong>
                    <p>Available Quantity: {available}</p>
                    <button onClick={()=> handleConfirmOrder (_id)} className='btn btn-success d-flex mx-auto'>Confirm Order</button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;