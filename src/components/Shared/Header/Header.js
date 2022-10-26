import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.displayName);



    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Technology</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                    <Nav className='align-items-center'>
                        <Link to="/" className='text-decoration-none me-4 text-white'>Home</Link>
                        <Link to="/courses" className='text-decoration-none me-4 text-white'>Courses</Link>
                        <Link to="/courses" className='text-decoration-none me-4 text-white'>Blog</Link>
                        <Link className='text-decoration-none text-white me-4'>FAQ</Link>
                        

                        <Link className='me-4'>
                            {user?.photoURL ?

                                <Image data-toggle="tooltip" data-placement="top" title={user?.displayName} style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                :
                                <p>joy</p>
                            }
                        </Link>

                        {
                            user?.uid ?
                                <Link to="/login" className='text-decoration-none text-white btn btn-primary'>LOGOUT</Link>
                                :
                                <Link to="/login" className='text-decoration-none text-white btn btn-primary'>LOGIN</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;