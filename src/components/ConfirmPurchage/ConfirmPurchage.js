import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';


const ConfirmPurchage = () => {

    const [user, loading] = useAuthState(auth);


    const [error, setError] = useState(null);
    const [requiredQuantity, setRequiredQuantity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const { id } = useParams();
    const [parts, setParts] = useState({});
    const { _id, name, img, description, price, minOrder, available } = parts;



    useEffect(() => {
        const url = `https://agile-oasis-94164.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [id])

    // loading 

    if (loading) {
        return <Loading></Loading>
    }

    // hadle purchage confirm

    const handleSubmit = (event) => {
        event.preventDefault();
        if (phoneNumber && address) {
            toast('Order Place Succesfully');
            setPhoneNumber('')
            setAddress('');
        }
        else{
            toast.error('Please Fill up this form ')
        }
    }

    return (
        <div className=''>
            <h1 className='text-center'>Please Confirm Your</h1>
            <h1 className='text-center'>Purchase Order For <span className='text-primary'>"{name}"</span></h1>
            <div className="d-flex">
                <div className=' w-50 '>
                    <div className='card mx-5 p-5 '>
                        <img className='d-flex mx-auto ' src={img} alt="" />
                        <h5 className='text-center'>{name}</h5>
                        <p className='d-flex text-center '><p className='w-50'>Minimum Order : {minOrder} pieces</p> <span style={{backgroundColor:'azure',border:'1px solid #a7c0e9',borderRadius:'10px',width:'30%'}} className=' m-2 px-2 ' >{price}$ per pieces</span></p>
                        <h6 className='text-center fw-bold '>{description?.slice(0,100)}</h6>
                        <p className='text-center my-3 fw-bold'>Available Quantity: {available}</p>
                    </div>

                </div>
                <div className='w-50 p-5 m-3'>
                    <Form>

                        <Form.Group
                            className="mb-3 mt-5"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label className="checkout-labels">Your Name</Form.Label>
                            <Form.Control
                                disabled={user?.displayName ? true : false}
                                value={user?.displayName}
                                type="text"
                                placeholder="First Name"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="checkout-labels">Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                value={user?.email}
                                required
                                disabled={user?.email ? true : false}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="checkout-labels">Selected Tool</Form.Label>
                            <Form.Control
                                disabled
                                value={name}
                                type="text"
                                placeholder="Your Selected Item"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="checkout-labels">
                                Number of Pieces You Want
                            </Form.Label>
                            <Form.Control
                                value={minOrder}
                                onChange={(e) => {
                                    // setReload(!reload);
                                    setRequiredQuantity(e.target.value);
                                }}
                                type="number"
                                name="quantity"
                                placeholder="Number of Stock"
                                required
                                disabled={parseInt(available) === 0 ? true : false}
                            />

                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Contact Number</Form.Label>
                            <Form.Control
                                value={phoneNumber}
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                }}
                                required
                                type="number"
                                placeholder="Your Phone Number"
                            />
                        </Form.Group>
                        <Form.Group
                            required
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Your Address</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <div className="my-5">
                <button
                    onClick={handleSubmit} className="btn btn-success d-block mx-auto px-5"
                >
                    Confirm Your Order

                </button>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ConfirmPurchage;