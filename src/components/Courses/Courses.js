import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
import CoursesCard from '../CoursesCard/CoursesCard';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Courses = () => {

    const coursesData = useLoaderData();
    console.log(coursesData);


    return (
        <div className='d-flex justify-content-center flex-wrap' style={{gap: "31px"}}>
            {
                coursesData.map(courseData => <CoursesCard
                    key={courseData.id}
                    courseData={courseData}
                ></CoursesCard>)
            }
        </div>
    );
};

export default Courses;






