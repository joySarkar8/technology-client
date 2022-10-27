import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const CourseDetails = () => {
    const courseDetail = useLoaderData();
    const {course_name, image_url, id, details} = courseDetail;

    return (
        <Card className='p-4'>
            <Card.Img style={{height: "400px" }} variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{course_name}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link className='btn btn-primary' to={`/checkout/${id}`}>Get Premium Access</Link>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;