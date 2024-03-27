import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getLocalReadList } from "../Utilities/LocalStorage";
import ReadBookCard from "../component/ReadBookCard/ReadBookCard";


const ListedBooks = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <div className="bg-base-200 p-10 rounded-xl mt-5">
                <h1 className="text-center font-bold text-4xl">Book</h1>
            </div>
            <div className="flex justify-center items-center p-5">
                <select className="select select-bordered select-lg w-full max-w-xs">
                    <option  disabled selected>Sort By</option>
                    <option>Rating</option>
                    <option>Number Of pages</option>
                    <option>Published year</option>
                </select>
            </div>
            <div role="tablist" className="tabs tabs-lifted w-96">
                <Link to={''} role="tab" onClick={() => setToggle(true)} className={toggle ? "tab tab-active" : "tab"}>Read Books</Link>
                <Link to={'Wish-list'} role="tab" onClick={() => setToggle(false)} className={!toggle ? "tab tab-active" : "tab"}>Wishlist Books</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default ListedBooks;