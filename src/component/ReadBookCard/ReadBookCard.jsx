import { DocumentIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


const ReadBookCard = ({ book }) => {
    const { image, author, bookName, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <div>
            <div className="card flex-row bg-base-100 shadow-xl">
                <div className="p-5">
                    <div className="bg-base-200 rounded-xl p-4"><img src={image} /></div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="flex gap-10 ">
                        <div>
                            <p className="space-x-4" ><span>Tags:</span>: {tags.map((tag, index) => <span className="bg-[#23BE0A0D] px-3 py-1 rounded-full text-[#23BE0A]" key={index}>#{tag}</span>)}</p>
                        </div>
                        <div className="flex gap-1">
                            <MapPinIcon className="h-6 w-6"/>
                            <p>Year Of Publishing: {yearOfPublishing} </p>
                       </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex gap-1">
                            <UsersIcon className="h-6 w-6" />
                            <p> Publisher: {publisher}</p>
                        </div>
                        <div className="flex gap-1">
                            <DocumentIcon className="h-6 w-6" />
                            <p>Pages: {totalPages}</p>

                        </div>
                    </div>
                    <div className="space-x-4">
                        <button className="btn bg-[#328EFF26] rounded-full text-[#328EFF]">Category: {category}</button >
                        <button className="btn text-[#FFAC33] rounded-full bg-[#FFAC3326]">Rating: {rating}</button >
                        <Link to={`book-details/${book.bookId}`}>
                            <button className="btn bg-[#23BE0A] rounded-full text-white">View Details</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReadBookCard;