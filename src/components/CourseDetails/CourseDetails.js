import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetail = useLoaderData();

    return (
        <div>
                <h2>{courseDetail.course_name}</h2>
        </div>
    );
};

export default CourseDetails;