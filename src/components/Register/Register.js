import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        providerLogin(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div className='mx-auto border rounded-4 mt-3 bg-white text-center' style={{ width: '500px', padding: '48px' }}>
            <h4 className='text-center mb-4'>Create Account</h4>
            <form className='mb-4'>
                <div className='mb-3' >
                    <input name='name' style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="text" placeholder='Name' />
                </div>
                <div className='mb-3' >
                    <input name='photoUrl' style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="text" placeholder='PhotoURL' />
                </div>
                <div className='mb-3' >
                    <input name='email' style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="eamil" placeholder='Email' />
                </div>
                <div className='mb-3'>
                    <input name='password' style={{ outline: 'none', width: '400px', padding: '7px 16px' }} type="password" placeholder='Password' />
                </div>
                <button className='btn btn-primary shadow' style={{ width: '400px', padding: '8px 16px' }}>REGISTER</button>
            </form>
            <hr className='mb-4' />
            <button onClick={handleGoogleSignIn} className='btn btn-danger shadow mb-3' style={{ width: '400px', padding: '8px 16px' }}>SIGN IN WITH GOOGLE</button>
            <button onClick={handleGithubSignIn} className='btn btn-dark shadow mb-4' style={{ width: '400px', padding: '8px 16px' }}>SIGN IN WITH GITHUB</button>
            <p>New member? <Link to='/register'>Register</Link> here.</p>
        </div>
    );
};

export default Register;