import React, { useState } from 'react';
import * as S from './Styles';
import SearchResultList from './SearchResultList';
import axios from 'axios';
const Search = ({ token }) => {
    const [name, setName] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const onChange = (e) => {        
        setName(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const url = 'http://13.125.249.23';
        axios({
            url: `${url}/users?username=${name}`,
            method: 'get',
            headers: {
                'Authorization': token.access_token,
            }
            
        }).then(res => {
            setSearchResult(res.data.users);
        }).catch(err => {
        });
    }
    return (
        <S.SearchWrapper>
            <header>
                <form onSubmit={onSubmit}>
                    <input type="text" value={name} placeholder="사용자 검색" onChange={onChange} />
                    <input type="submit" value=""/>
                </form>
            </header>
            <SearchResultList searchResult={searchResult} />
        </S.SearchWrapper>
    );
};

export default Search;