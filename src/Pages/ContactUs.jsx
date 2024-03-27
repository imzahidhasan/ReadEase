import React from 'react';

const AboutUs = () => {
    return (
        <div className='flex gap-5 min-h-[calc(100vh-150px)]'>
            <div className='w-1/2 flex flex-col justify-center items-center space-y-2' >
                <h1 className='text-6xl font-bold text-green-500'>Contact Us</h1>
                <p className='font-medium text-lg'>If you have any inquire,please feel free to reach us</p>
                <p className='font-medium text-lg'> We will reach you soon</p>
            </div>
            <div className='w-1/2 flex flex-col justify-center space-y-2'>
                <label className="input input-bordered flex items-center gap-2">
                    First Name
                    <input type="text" className="grow" placeholder="Your First name" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Last Name
                    <input type="text" className="grow" placeholder="Your last name" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input type="text" className="grow" placeholder="example@gmail.com" />
                </label>
                <textarea className="textarea textarea-bordered" placeholder="Your quires"></textarea>
                <button className='btn bg-green-500 text-white'>Submit</button>
            </div>
        </div>
    );
};

export default AboutUs;