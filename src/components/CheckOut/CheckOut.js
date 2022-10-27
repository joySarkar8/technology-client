import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DarkModeContext } from '../../contexts/DarkMode/DarkMode';

const CheckOut = () => {

    const { darkMode } = useContext(DarkModeContext);
    const courseDetail = useLoaderData();
    const { course_name, image_url, price, details } = courseDetail;
    console.log(courseDetail);
    return (
        <div className='container vh-100'>
            <h2 className={darkMode ? "text-light text-center" : "text-center text-dark"}>
                Review Your Order & Complete Checkout
            </h2>
            <hr className={darkMode ? "text-light text-center" : "text-center text-dark"} />
            <Link className="btn btn-info" style={{ width: "100%" }}>Add More Products & Services</Link>
            <hr className={darkMode ? "text-light text-center mb-5" : "text-center text-dark mb-5"} />

            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Img style={{ width: '100%', height: "186px" }} variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <h5>Price:</h5>
                        <h5>{price}$</h5>
                    </div>
                    <Button className='w-100' variant="primary">Purchase</Button>
                </Card.Body>

                <Link>
                    { }
                </Link>
            </Card>





        </div>
    );
};

export default CheckOut;