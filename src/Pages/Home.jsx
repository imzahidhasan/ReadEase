import React from 'react';
import BookCard from '../component/BookCard/BookCard';
import Hero from '../component/Hero/Hero';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Hero />
            <div className='p-5'>
                <h1 className='text-center text-5xl font-bold p-5 mt-5'>Book</h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 container mx-auto gap-6'>
                {
                    data.map((data,index) => <BookCard key={index} data={data} />)
                }
               
            </div>
        </div>
    );
};

export default Home;