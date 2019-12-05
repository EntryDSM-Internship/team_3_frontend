import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../../img/Main/MainIcon.png';

const categories = [
    {
        name: 'home',
        text: '홈',
    },
    {
        name: 'search',
        text: '검색',
    },
    {
        name: 'profile',
        text: '프로필',
    },
];
const Category = styled(NavLink)`
    &.active {
        border-bottom: 4px solid #505BDA;
    }
`;

const Wrapper = styled.div`
    border-bottom: 2px solid #505BDA;  
    padding-left: 12px;
    box-sizing: border-box;
    main {
        width: auto;
        max-width: 1140px;
        margin: 0 auto;
        height: 57px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div {
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            a {
                img {
                width: 28px;
                height: 27px;
                }
            }
        }
        ul {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            a { 
                display: inline-block;
                width: 74px;
                height: 57px;
                list-style: none;
                text-align: center;
                line-height: 60px;
                margin: 0;
                box-sizing: border-box;
                font-weight: bold;
                text-decoration: none;
                color: #000000; 
            }
        }
    }
`;

const Header = () => {
    return (
        <Wrapper>
            <main>
                <div>
                    <NavLink to="/home">
                        <img src={Icon} alt="아이콘" />
                    </NavLink>
                </div>
                <ul>
                    {categories.map(c => (
                        <Category
                            key={c.name}
                            activeClassName="active"
                            to={c.name}
                        >
                            {c.text}
                        </Category>
                    ))}
                </ul>
            </main>
        </Wrapper>
    );
};

export default Header;