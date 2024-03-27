import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getLocalReadList } from "../Utilities/LocalStorage";



const ListedBooks = () => {
    const [toggle, setToggle] = useState(true)
    const [localData, setLocalData] = useState([])
    const [sortedData, setSortedData] = useState([])

    useEffect(() => {
        const getData = getLocalReadList()
        setLocalData(getData)
    }, [])
    const handleRatingSort = () => {
        const sortedByRating = [...localData].sort((a, b) => a.rating - b.rating);
        setSortedData(sortedByRating);
    };

    const handleNumberOfPageSort = () => {
        const sortedByNumberOfPages = [...localData].sort((a, b) => a.totalPages - b.totalPages);
        setSortedData(sortedByNumberOfPages);
    };

    const handlePublishedYearSort = () => {
        const sortedByPublishedYear = [...localData].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        setSortedData(sortedByPublishedYear);
    };

  


    return (
        <div>
            <div className="bg-base-200 p-10 rounded-xl mt-5">
                <h1 className="text-center font-bold text-4xl">Books</h1>
            </div>
            <div className="flex justify-center items-center p-5">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-green-500 text-white m-1">sort by</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handleRatingSort}><a>Rating</a></li>
                        <li onClick={handleNumberOfPageSort}><a>Total Pages</a></li>
                        <li onClick={handlePublishedYearSort}><a>Published Year</a></li>
                    </ul>
                </div>
            </div>
            <div role="tablist" className="tabs tabs-lifted w-96">
                <Link to={''} role="tab" onClick={() => setToggle(true)} className={toggle ? "tab tab-active" : "tab"}>Read Books</Link>
                <Link to={'Wish-list'} role="tab" onClick={() => setToggle(false)} className={!toggle ? "tab tab-active" : "tab"}>Wishlist Books</Link>
            </div>
            <Outlet context={[sortedData]} />
        </div>
    );
};

export default ListedBooks;