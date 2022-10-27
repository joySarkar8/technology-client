import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CoursesCard = ({ courseData }) => {

    const { course_name, image_url, id, details } = courseData;
   

   
    return (
        <Card className='shadow p-2' style={{ width: '18rem' }}>
            <Card.Img className='border' style={{ width: '100%', height: "186px" }} variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{course_name}</Card.Title>
                <Card.Text>
                {
                        details.length > 250

                            ?

                            <>{details.slice(0, 100) + '...'}</>
                            
                            :

                            details
                    }
                </Card.Text>
                <Link className='btn btn-primary w-100' to={`/courses/${id}`}>View Details</Link>
            </Card.Body>
        </Card>

    );
};

export default CoursesCard;