import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Header = () => {
    return (
        <div>
            <main>
                <img src={require("../../img/Main/MainIcon.png")} alt="아이콘"/>
                <ul>
                    <li>
                        <Link to="/main">홈</Link>
                    </li>
                    <li>
                        <Link to="/search">검색</Link>
                    </li>
                    <li>
                        <Link to="/profile">프로필</Link>
                    </li>
                </ul>
            </main>
        </div>
    );
};

export default Header;