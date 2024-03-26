import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className='flex gap-7 flex-col'>
                        <div >
                            <h1 className='md:text-6xl text-5xl text-center md:text-left max-w-[37rem]'>Books to freshen up your bookshelf</h1>
                        </div>
                        <div className='text-center md:text-left'>
                            <Link to={'/listed-books'} >
                                <button className='btn bg-green-600 text-white'>View the List</button>
                            </Link>
                        </div>
                    </div>
                    <div className=" shrink-0 w-full max-w-sm">
                        <div>
                            <img src='https://i.ibb.co/4tzTcgY/book.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;