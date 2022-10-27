import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CoursesCard = ({ courseData }) => {

    const { course_name, image_url, id } = courseData;
   

   
    return (
        <Card className='shadow p-2' style={{ width: '18rem' }}>
            <Card.Img className='border' style={{ width: '100%', height: "186px" }} variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{course_name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Link className='btn btn-primary w-100' to={`/courses/${id}`}>View Details</Link>
            </Card.Body>
        </Card>

    );
};

export default CoursesCard;