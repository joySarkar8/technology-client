import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])



    return (
        <div>
            {
                courses.map(coursesName => <p
                    key={coursesName.id}>
                    <Link to={`/courses/${coursesName.id}`}>
                        {coursesName.course_name}
                    </Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;