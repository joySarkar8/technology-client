import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CourseDetails = () => {
    const courseDetail = useLoaderData();
    const {course_name, image_url, id} = courseDetail;

    return (
        <Card className='p-4'>
            <Card.Img style={{height: "400px" }} variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{course_name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Link className='btn btn-primary' to={`/checkout/${id}`}>Get Premium Access</Link>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;