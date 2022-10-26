import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CoursesCard = ({ courseData }) => {

    const { course_name, image_url, id } = courseData;


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img style={{ width: '100%', height: "186px" }} variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{course_name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Link to={`/courses/${id}`}>
                {course_name}
            </Link>
        </Card>

    );
};

export default CoursesCard;

// {/* <div className='border border-success mb-4 mt-4'>
//             <h4>{courseData.course_name}</h4>
//             <Link to={`/courses/${courseData.id}`}>Details</Link>
//         </div> */}