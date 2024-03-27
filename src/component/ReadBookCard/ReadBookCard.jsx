import { DocumentIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


const ReadBookCard = ({ book }) => {
    const { image, author, bookName, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <div>
            <div className="card lg:flex-row bg-base-100 shadow-xl">
                <div className="p-5">
                    <div className="bg-base-200 rounded-xl mx-auto p-4">
                        <img className="mx-auto" src={image} />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 ">
                        <div>
                            <p className="space-x-4" ><span>Tags:</span>: {tags.map((tag, index) => <span className="bg-[#23BE0A0D] lg:px-3 py-1 rounded-full text-[#23BE0A]" key={index}>#{tag}</span>)}</p>
                        </div>
                        <div className="flex gap-1">
                            <MapPinIcon className="h-6 w-6" />
                            <p>Year Of Publishing: {yearOfPublishing} </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
                        <div className="flex gap-1">
                            <UsersIcon className="h-6 w-6" />
                            <p> Publisher: {publisher}</p>
                        </div>
                        <div className="flex gap-1">
                            <DocumentIcon className="h-6 w-6" />
                            <p>Pages: {totalPages}</p>

                        </div>
                    </div>
                    <div className="lg:space-x-4 my-3 flex  gap-1 flex-row">
                        <div>
                            <button className="btn bg-[#328EFF26] rounded-full text-[#328EFF]">Category: {category}</button >
                        </div>
                        <div>
                            <button className="btn text-[#FFAC33] rounded-full bg-[#FFAC3326]">Rating: {rating}</button >
                        </div>
                        <Link to={`/book-details/${book.bookId}`}>
                            <div>
                                <button className="btn bg-[#23BE0A] rounded-full text-white">View Details</button>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReadBookCard;