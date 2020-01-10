import React from 'react';
import SearchResultItem from './SerachResultItem';

const SearchResultList = ({ searchResult }) => {
    return (
        <>
        {
            searchResult.map(info => (
                <SearchResultItem key={info.id} info={info} />
            ))
        }
        </>
    );
};

export default SearchResultList;