import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Product = (props) => {
    const { _id, name , img,description } = props.product;
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;