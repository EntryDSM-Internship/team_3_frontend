import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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
            img {
                width: 28px;
                height: 27px;
            }
        }
        ul {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            li {    
                width: 74px;
                height: 57px;
                list-style: none;
                text-align: center;
                line-height: 60px;
                margin: 0;
                box-sizing: border-box;
                &.under_line {
                    border-bottom: 4px solid #505BDA;
                }
                a {
                    height: 18px;
                    font-weight: bold;
                    font-size: ;
                    text-decoration: none;
                    color: #000000; 
                }
            }
        }
    }   
`;

const Header = () => {
    return (
        <Wrapper>
            <main>
                <div>
                    <img src={require("../../img/Main/MainIcon.png")} alt="아이콘" />
                </div>
                <ul>
                    <li className="under_line">
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
        </Wrapper>
    );
};

export default Header;