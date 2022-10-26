import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CheckOut = () => {

    const courseDetail = useLoaderData();
    const { course_name, image_url, price } = courseDetail;
    console.log(courseDetail);
    return (
        <div className='container'>
            <h2 className='text-center'>
                Review Your Order & Complete Checkout
            </h2>
            <hr />
            <Link className="btn btn-info" style={{ width: "100%" }}>Add More Products & Services</Link>
            <hr />

            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Img style={{ width: '100%', height: "186px" }} variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <h5>Price:</h5>
                        <h5>{price}$</h5>
                    </div>
                    <Button className='w-100' variant="primary">Go somewhere</Button>
                </Card.Body>

                <Link>
                    { }
                </Link>
            </Card>





        </div>
    );
};

export default CheckOut;