import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CoursesCard = ({courseData}) => {

    console.log(courseData);


    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
       
    );
};

export default CoursesCard;

{/* <div className='border border-success mb-4 mt-4'>
            <h4>{courseData.course_name}</h4>
            <Link to={`/courses/${courseData.id}`}>Details</Link>
        </div> */}