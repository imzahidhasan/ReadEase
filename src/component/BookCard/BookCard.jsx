import {  StarIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const BookCard = ({ data }) => {
    const { bookId,
        bookName,
        author,
        image,
        rating,
        category,
        tags } = data || {}
    return (
        <Link to={`book-details/${bookId}`}>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 py-10 bg-base-200 ">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <div className='space-x-4'>{tags.map((tag, idx) => <span key={idx} className='bg-[#23BE0A0D] rounded-full text-green-600 p-1'> {tag}</span>)}</div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className='border-b  border-dashed border-gray-500'></div>
                    <div className='flex justify-between'>
                        <p className='text-left'>{category}</p>
                        <p className=' flex justify-end gap-1'>{rating} <StarIcon className='h-6 w-6' /> </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;