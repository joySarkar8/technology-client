import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://technology-beta.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])



    return (
        <div>
            {
                courses.map(coursesName => <p
                    key={coursesName.id}>
                    <NavLink className='btn btn-primary shadow w-100' to={`/courses/${coursesName.id}`}>
                        {coursesName.course_name}
                    </NavLink>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;