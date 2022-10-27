import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const [error, setError] = useState('')
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        providerLogin(gitProvider)
            .then(result => {
                const user = result.user;
                user && navigate(from, { replace: true })
                toast.success('Github Login Successfull!')
            })
            .catch(e => {
                toast.error(e.message);
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                user && navigate(from, { replace: true })
                toast.success('Google Login Successfull!')
            })
            .catch(e => {
                toast.error(e.message);
            })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                
                user && navigate(from, { replace: true })
                
            })
            .catch(e => {
                setError(e.message)
            })
            
    }
    console.log(error);
    return (
        <div className='mx-auto border rounded-4 mt-3 bg-white text-center' style={{ width: '500px', padding: '48px' }}>
            <h4 className='text-center mb-4'>Log In</h4>
            <form onSubmit={handleSubmit} className='mb-4'>
                <div className='mb-3' >
                    <input style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="eamil" id='email' placeholder='Email' />
                </div>
                <div className='mb-3'>
                    <input style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="password" id='password' placeholder='Password' />
                </div>
                <button className='btn btn-primary shadow' style={{ width: '400px', padding: '8px 16px' }}>LOGIN</button>
            </form>
            <hr className='mb-4' />
            <button onClick={handleGoogleSignIn} className='btn btn-danger shadow mb-3' style={{ width: '400px', padding: '8px 16px' }}>SIGN IN WITH GOOGLE</button>
            <button onClick={handleGithubSignIn} className='btn btn-dark shadow mb-4' style={{ width: '400px', padding: '8px 16px' }}>SIGN IN WITH GITHUB</button>
            <p className='text-danger'>{error}</p>
            <p>New member? <Link to='/register'>Register</Link> here.</p>
        </div>
    );
};

export default Login;