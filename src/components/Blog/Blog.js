import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuistionAndAnswer from '../QuistionAndAnswer/QuistionAndAnswer';

const Blog = () => {
    const datas = useLoaderData();
    return (
        <div className='container'>
            {
                datas.map(data => <QuistionAndAnswer
                key={data.id}
                data={data}
                ></QuistionAndAnswer>)
            }
        </div>
    );
};

export default Blog;