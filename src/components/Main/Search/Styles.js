import styled from 'styled-components';
import SearchButton from '../../../img/Search/SearchButton.png';

export const SearchWrapper = styled.div`
    overflow-y: scroll;
    -ms-overflow-style: none; 
    width: 750px;
    height: 100%;
    box-sizing: border-box;
    border-right: 3px solid rgba(249, 250, 254, 1);
    &::-webkit-scrollbar {
        display:none;
    }
    > header {
        width: 750px;
        height: 68px;
        background-color: rgba(255, 255, 255, 0);
        padding: 15px 30px 11px 15px;
        box-sizing: border-box;
        border-bottom: solid 2px #f9fafe;
        form {
                display: flex;
                justify-content: space-between;
                align-items: center;
            width: 100%;
            height: 38px;
            > input {
                width: 647px;
                height: 38px;
                border: none;
                border-radius: 19px;
                padding: 11px 0px 11px 30px;
                box-sizing: border-box;
                background-color: #dcdef8;
                outline: none;
                font-weight: bold;
            }
            > input:nth-last-child(1) {
                background-color: transparent;
                border: none;
                width: 28px;
                height: 28px;
                padding: 0;
                background-image: url(${SearchButton});
                cursor: pointer;
                outline: none;
            }
        }
    }
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const SearchItemWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 79px;
    border-bottom: solid 2px #f9fafe;
    > .profile_image {
        width: 79px;
        height: 79px;
        display: flex;
        justify-content: center;
        align-items: center;
        > a > img {
            width: 49px;
            height: 49px;
            border-radius: 50%;
        }
    }
    > main {
        > header {
            margin-top: 15px;
            > a {
                text-decoration: none;
                > span {
                    width: auto;
                    height: 18px;
                    font-size: 16px;
                    text-align: left;
                    color: #000000;
                    font-weight: bold;
                    margin-right: 15px;
                    margin-bottom: 7px;
                }
            }
        }
        > p {
            margin: 0;  
        }
    }
`;