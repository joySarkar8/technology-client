import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../components/LeftSideNav/LeftSideNav';

const CourseLayout = () => {
    return (
        <Container style={{minHeight: '1000px'}}>
            <Row>
                <Col lg="2">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="10" className=''>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
    );
};

export default CourseLayout;