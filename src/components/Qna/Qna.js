import React from 'react';
import { Accordion } from 'react-bootstrap';

const Qna = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center py-3'>Frequently Asked Questions</h1>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header className='fw-bold'>What Kind Of Products Do You Supply?</Accordion.Header>
                <Accordion.Body>
                We provide the best tools in Bangladesh for small business and entrepreneurs. We're community-powered software for social media marketing and analytics. Stop struggling to get better at social media and get great results now. It's easy to get started at BoldTap!Build a presence in LinkedIn Marketing. Instant growth and ROI by using the BoldTap Social Analytics Platform.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header >Do You Supply Products Outside Bangladesh?</Accordion.Header>
                <Accordion.Body>
                Yes. We supply outside Bangladesh for the making of quality tools, so our first product is by far and away our own product, which we pride ourselves in. And the sourcing of the factories to make these and obviously the manufacturing are in the hands of JW Boston. So that's where the quality and the high-quality of this product is, and we are very, very proud of the quality of the material we use. I think we've talked about this before but most T-shirts you can buy in the shop this year have been made in America, in a factory. A lot of them are made in China.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header >Do You Sell In Retail System?</Accordion.Header>
                <Accordion.Body>
                We sell in a wholesale system to grow our business all over the world. Our tools are best in quality in the industry, and our passion is in customer service. We take a lot of pride in our products and brand.It's a great feeling to think that our brand and products are such an important part of the foundation of the business world today. At the same time, my most rewarding moments are when our customers tell me they can't live without our product.We've been on an amazing journey.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
    );
};

export default Qna;