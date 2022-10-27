import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { DarkModeContext } from '../../../contexts/DarkMode/DarkMode';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const { darkMode, setDarkMode } = useContext(DarkModeContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <Navbar className='shadow mb-5' style={{ minHeight: '4rem' }} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Technology</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                    <Nav className='align-items-center'>
                        <NavLink to="/" className='text-decoration-none me-4 text-white'>Home</NavLink>
                        <NavLink to="/courses" className='text-decoration-none me-4 text-white'>Courses</NavLink>
                        <NavLink to="/courses" className='text-decoration-none me-4 text-white'>Blog</NavLink>
                        <NavLink className='text-decoration-none text-white me-4'>FAQ</NavLink>



                        {
                            user?.photoURL &&

                            <NavLink className='me-4'><Image data-toggle="tooltip" data-placement="top" title={user?.displayName} style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image></NavLink>

                        }



                        {
                            user?.uid ?
                                <NavLink onClick={handleLogOut} to="/login" className='text-decoration-none text-white btn btn-primary'>LOGOUT</NavLink>
                                :
                                <NavLink to="/login" className='text-decoration-none text-white btn btn-primary'>LOGIN</NavLink>
                        }
                        <div className="switch-checkbox">
                            <label className="switch">
                                <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                                <span className="slider round"> </span>
                            </label>
                        </div>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;