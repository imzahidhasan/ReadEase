import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex min-h-screen bg-[#f1f1f1] items-center">
            <div className="container mx-auto">
                <div  className="text-center space-y-4 ">
                    <h1 className='text-6xl'>😮</h1>
                    <h2 className='text-5xl font-medium'>Oops! Page Not Be Found</h2>
                    <p className='text-lg'>Sorry but the page you are looking for does not exist.</p>
                    <Link to={'/'}> <button className='btn btn-outline mt-4 text-blue-500'> Back to homepage</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;