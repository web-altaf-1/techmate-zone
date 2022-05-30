import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import SocialMedia from '../SocialMedia/SocialMedia';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // react firebase hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;


    let from = location.state?.from?.pathname || "/";

    // loading 

    if (loading ) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    // error
    if (error) {
        toast(`Error : ${error.message}`)
        // errorElement = <p className='text-danger'>Error: {error.message}</p>
    };

    // sign in with email and pass

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className=''>
            <h2 className='text-center text-primary my-3'>Please Login</h2>
            <div className='w-50 mx-auto shadow-lg p-5 bg-white my-5'>
                <Form className='' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' autoComplete='off' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" autoComplete='off' required name='password' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I agree with terms And conditions" required />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Label className='mt-2'>New to TechMate Zone ??
                    </Form.Label>
                    <Link style={{ marginLeft: '5px' }} to='/register'>Please Register</Link>
                    <br />

                </Form>

                {/* social media login system */}
                <SocialMedia></SocialMedia>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;