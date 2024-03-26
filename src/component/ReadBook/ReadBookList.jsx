import React, { useEffect, useState } from 'react';
import { getLocalReadList } from '../../Utilities/LocalStorage';
import ReadBookCard from '../ReadBookCard/ReadBookCard';

const ReadBookList = () => {
    const [readBook, setReadBook] = useState([])
    useEffect(() => {
        const localReadList = getLocalReadList()
        setReadBook(localReadList)
    }, [])
    return (
        <div>
            <div className="space-y-4 container">
                {
                    readBook.map((item, index) => <ReadBookCard key={index} book={item} />)
                }
            </div>
        </div>
    );
};

export default ReadBookList;