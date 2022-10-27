import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { DarkModeContext } from '../../contexts/DarkMode/DarkMode';

const Faq = () => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <Accordion className='container mb-5' defaultActiveKey="0">
            <h1 className={darkMode ? "text-white" : "light-mode"} style={{textAlign: 'center', margin: '0 0 40px 0'}} >Frequently asked questions - FAQ</h1>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Are all of our courses certified?</Accordion.Header>
                <Accordion.Body>
                We offer many certification options. However, in response to feedback from our customers, some of our courses are "skills-focused". A skills-focused course is practical and interactive, giving you relevant skills, but with no exam or accreditation.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Where are the courses held?</Accordion.Header>
                <Accordion.Body>
                Our courses run in a number of nationwide venues. When you book with us, we will send you a confirmation email which includes venue details and directions.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What time does training begin at?</Accordion.Header>
                <Accordion.Body>
                Our courses begin at 9.30 each morning and end at 5.00pm each evening. This may vary slightly by 30 minutes on either side. Your customer care representative will confirm the exact times for your course.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>How long will my course take?</Accordion.Header>
                <Accordion.Body>
                How long will my course take?
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Faq;