import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { DarkModeContext } from '../../contexts/DarkMode/DarkMode';

const Home = () => {
    const { user } = useContext(AuthContext);
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className='container vh-100'>
            <div className={darkMode ? "text-white opacity-75" : "light-mode"}>
                <div className='text-center p-5'>
                    <h1 className='mb-4'>Welcome to TECHNOLOGY course.</h1>
                    <p>Information Technology courses are an excellent choice to help advance your career. Whether you are seeking professional development, <br /> new skills, or a new career, information technology courses can help you become a more competitive and valuable employee with important skills.</p>
                    {
                        user && user.uid ?

                            <Link className={darkMode ? "text-dark btn btn-light p-3 me-3" : "btn btn-dark p-3 me-3"} to={'/courses'}>
                                Courses
                            </Link>

                            :

                            <>
                                <Link className={darkMode ? "text-dark btn btn-light p-3 me-3" : "btn btn-dark p-3 me-3"} to={'/login'}>
                                    Login
                                </Link>

                                <Link className={darkMode ? "text-dark btn btn-light p-3 me-3" : "btn btn-dark p-3 me-3"} to={'/register'}>
                                    Register
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;