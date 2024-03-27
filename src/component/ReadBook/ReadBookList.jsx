import React, { useEffect, useState } from 'react';
import { getLocalReadList } from '../../Utilities/LocalStorage';
import ReadBookCard from '../ReadBookCard/ReadBookCard';
import { useOutletContext } from 'react-router-dom';

const ReadBookList = () => {
    const [sortedData] = useOutletContext()
    const [readBook, setReadBook] = useState([])
    useEffect(() => {
        setReadBook(sortedData)
    }, [sortedData])
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