import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CourseDetails from '../../components/CourseDetails/CourseDetails';
import Courses from '../../components/Courses/Courses';
import CoursesCard from '../../components/CoursesCard/CoursesCard';
import Home from '../../components/Home/Home';
import CourseLayout from '../../layout/CourseLayout';
import Main from '../../layout/Main';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <CourseLayout></CourseLayout>,
                children: [
                    {
                        path: '/courses',
                        element: <Courses></Courses>,
                        loader: () => fetch('http://localhost:5000/courses'),
                    },
                    {
                        path: '/courses/:id',
                        element: <CourseDetails></CourseDetails>,
                        loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
                    },
                ]
            },
        ]
    }
])


