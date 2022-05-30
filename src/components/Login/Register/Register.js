import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    let passwordError;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const pp = 'a';

    const handleCreateUser = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast('User Successfully created')

        navigate('/');

    }


    return (
        <div className=''>
            <h2 className='text-center text-primary my-3'>Please Register</h2>
            <Form onSubmit={handleCreateUser} className='w-50 mx-auto shadow-lg p-5 bg-white mb-5' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" name='name' autoComplete='off' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' autoComplete='on' required />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' autoComplete='off' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Label className='mt-2'>Already Have an Account ??
                </Form.Label>
                <Link style={{ marginLeft: '5px' }} to='/login'>Please Login</Link>
                <br />
            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;