import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {getDataFromLocalStorage, saveDataToLocalStorage} from '../Utilities/LocalStorage'
const BookDetails = () => {
    const { bookId } = useParams()
    const bookData = useLoaderData()
    const book = bookData.find((book) => book.bookId === +bookId)
    const { image, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    const handleReadList = () => {
       saveDataToLocalStorage(book)
    }
    const handleWishList = () => {
        getDataFromLocalStorage(book)
    }
    return (
        <div className='flex '>
            <div className='w-1/2 text-center p-5 flex justify-center'>
                <img className='w-full rounded-xl p-5 bg-base-200' src={image} alt="book img" />
            </div>
            <div className='w-1/2 p-5'>
                <div className='space-y-2 p-2'>
                    <h1 className='text-3xl font-bold '>{bookName}</h1>
                    <p className='font-medium text-lg'>By: {author}</p>
                </div>
                <div className='border-gray-500 border-dashed border-b'></div>
                <p className='text-lg font-medium p-2'>{category}</p>
                <div className='border-gray-500 border-dashed border-b'></div>
                <p className='text-base p-2'><span className='font-bold'>Review:</span> {review}</p>
                <p className='space-x-2 p-2'><span className='font-bold '>Tags:</span> {tags.map((tag, idx) => <span className='text-[#23BE0A] bg-[#23BE0A0D] rounded-full py-1 px-2' key={idx}>#{tag}</span>)}</p>
                <div className='border-gray-500 border-dashed border-b'></div>
                <div className='p-2 space-y-3 '>
                    <div className=' justify-between flex'>
                        <div className='w-1/2'>
                            <p>Number Of Page:</p>
                        </div>
                        <div className='w-1/2 font-bold'>
                            <p>{totalPages || 'Unknown'}</p>
                        </div>
                    </div>
                    <div className=' justify-between flex'>
                        <div className='w-1/2'>
                            <p>Publisher:</p>
                        </div>
                        <div className='w-1/2 font-bold'>
                            <p>{publisher || 'Unknown'}</p>
                        </div>
                    </div>
                    <div className=' justify-between flex'>
                        <div className='w-1/2'>
                            <p>Year of Publishing:</p>
                        </div>
                        <div className='w-1/2 font-bold'>
                            <p>{yearOfPublishing || 'Unknown'}</p>
                        </div>
                    </div>
                    <div className=' justify-between flex'>
                        <div className='w-1/2'>
                            <p>Rating:</p>
                        </div>
                        <div className='w-1/2 font-bold'>
                            <p className='justify-start'>{rating || 'Unknown'}</p>
                        </div>
                    </div>
                    <div className='space-x-3'>
                        <button onClick={handleReadList} className='btn bg-white border-[#131313] text-[#131313]'>Read</button>
                        <button onClick={() => handleWishList()} className='btn bg-[#50B1C9] text-white'>Wishlist</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;