import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLocalReadList } from "../Utilities/LocalStorage";
import ReadBookCard from "../component/ReadBookCard/ReadBookCard";


const ListedBooks = () => {
    const [toggle, setToggle] = useState(false)
    const [readBook, setReadBook] = useState([])
    console.log(readBook);
    useEffect(() => {
        const localReadList = getLocalReadList()
       
        setReadBook(localReadList)
    }, [toggle])
    return (
        <div>
            <div className="bg-base-200 p-10 rounded-xl mt-5">
                <h1 className="text-center font-bold text-4xl">Book</h1>
            </div>
            <div>

            </div>
            <div role="tablist" className="tabs tabs-lifted w-96">
                <Link to={''} role="tab" onClick={() => setToggle(true)} className={toggle ? "tab tab-active" : "tab"}>Read Books</Link>
                <Link to={''} role="tab" onClick={() => setToggle(false)} className={!toggle ? "tab tab-active" : "tab"}>Wishlist Books</Link>
            </div>
            <div className="space-y-4 container">
                {
                    readBook.map((item,index) => <ReadBookCard key={index} book={item} />)
                }
            </div>
        </div>
    );
};

export default ListedBooks;