import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mx-auto border rounded-4 mt-3 bg-white text-center' style={{ width: '500px', padding: '48px' }}>
            <h4 className='text-center mb-4'>Log In</h4>
            <form className='mb-4'>
                <div className='mb-3' >
                    <input style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="eamil" id='email' placeholder='Email' />
                </div>
                <div className='mb-3'>
                    <input style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="password" id='password' placeholder='Password' />
                </div>
                <button className='btn btn-primary shadow' style={{ width: '400px', padding: '8px 16px' }}>LOGIN</button>
            </form>
            <hr className='mb-4' />
            <button className='btn btn-danger shadow mb-3' style={{ width: '400px', padding: '8px 16px' }}>SIGN IN WITH GOOGLE</button>
            <button className='btn btn-dark shadow mb-4' style={{ width: '400px', padding: '8px 16px' }}>SIGN IN WITH GITHUB</button>
            <p>New member? <Link to='/register'>Register</Link> here.</p>
        </div>
    );
};

export default Login;






















{/* <div style={{ width: '30%', padding: '0 0 0 16px' }}>
                    <Link className='btn btn-primary d-block'>LOGIN</Link>
                    <p className='m-0 '><span>or, login with</span></p>
                    <Link className='btn btn-primary d-block mb-3'>Github</Link>
                    <Link className='btn btn-primary d-block'>Google</Link>
                </div> */}