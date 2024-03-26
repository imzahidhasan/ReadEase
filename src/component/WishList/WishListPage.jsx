import React from 'react';
import ReadBookCard from '../ReadBookCard/ReadBookCard';
import { getLocalWishList } from '../../Utilities/LocalStorage';

const WishListPage = () => {
    const WishList = getLocalWishList()
    console.log(WishList);
    return (
        <div>
            <div className="space-y-4 container">
                {
                    WishList.map((item, index) => <ReadBookCard key={index} book={item} />)
                }
            </div>
        </div>
    );
};

export default WishListPage;