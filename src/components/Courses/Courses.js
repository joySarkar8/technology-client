import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from '../CoursesCard/CoursesCard';



const Courses = () => {

    const coursesData = useLoaderData();
    console.log(coursesData);


    return (
        <div className='d-flex justify-content-center flex-wrap' style={{gap: "31px"}}>
            {
                coursesData.map(courseData => <CoursesCard
                    key={courseData.id}
                    courseData={courseData}
                ></CoursesCard>)
            }
        </div>
    );
};

export default Courses;






