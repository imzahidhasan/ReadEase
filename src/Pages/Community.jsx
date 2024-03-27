import { BsDiscord, BsFacebook, BsYoutube } from "react-icons/bs";
import React from 'react';

const Community = () => {
    return (
        <div className="min-h-[500px] flex flex-col justify-center items-center">
            <div className='text-center text-gray-600 space-y-3'>
                <h1 className='text-3xl font-bold '>We have a large Community Of Book Lover</h1>
                <p className='text-lg font-medium'>If you have interest in book reading you can check out our community</p>
                <p className='text-lg font-medium'>You could be a part of our community if you want</p>
            </div>
            <div className="flex mt-10 flex-col gap-3 justify-center items-center">
                <div className="flex gap-3 justify-center items-center ">
                    <BsFacebook className="text-4xl hover:scale-105 transition duration-500 text-blue-500" />
                    <p className="text-xl">Facebook Group</p>
                </div>
                <div className="flex gap-3 justify-center items-center ">
                    <BsYoutube className="text-4xl hover:scale-105 transition duration-500 text-red-500" />
                    <p  className="text-xl">Youtube Channel</p>
                </div>
                <div className="flex justify-center gap-3 items-center ">
                    <BsDiscord className="text-4xl hover:scale-105 transition duration-500 text-blue-500" />
                    <p className="text-xl">Discord Server   </p>
                </div>
            </div>
        </div>
    );
};

export default Community;