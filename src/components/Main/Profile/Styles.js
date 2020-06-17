import styled from 'styled-components';
import ProflieImage from '../../../img/SignUp/profileImage.png';

export const MainWrapper = styled.div`
    width: 750px;
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display:none;
    }
`;

export const ProfileWrapper = styled.div`
    width: 100%;
    height: 568px;
    position: relative;
    display: flex;
    flex-direction: column;
    > header {
        width: 750px;
        height: 179px;
        background-color: #f9fafe
    }
    > div {
        position: relative;
        bottom: 71px;
        width: 142px;
        height: 142px;
        background-color: #ffffff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 19px;
        > img {
            width: 134px;
            height: 134px;
            border-radius: 50%;
        }    
    }
    > main {
        display: flex;
        position: relative;
        justify-content: space-between;
        bottom: 130px;
        height: 337px;
        padding: 0 19px;
        box-sizing: border-box;
        > div {
            position: relative;
            top: 101px;
            > div {
            font-size: 20px;
            color: #7f7f7f;
                > p {
                    font-size: 20px;
                    color: #7f7f7f;
                    display: inline-block;
                    cursor: pointer;
                    &:nth-child(1) {
                            margin-right: 75px;
                        }
                    > span {
                        width: 37px;
                        height: 22px;
                        font-size: 20px;
                        font-weight: bold;
                        color: #000000;
                        margin-left: 8px;
                        
                    }
                }
            }
            > span {
                font-weight: bold;
            }
        }
        > aside {
            display: flex;
            flex-direction: column;
            width: 100px;
            height: auto;
            margin-top: 15px;
            margin-right: 15px;
            > button {
                width: 100px;
                height: 37px;
                border-radius: 25px;
                background-color: #ffffff;
                color: #505bda;
                font-weight: bolder;
                border: 1px solid blue;
                margin-bottom: 16px;
                cursor: pointer;
                outline: none;
                &.following {
                    background-color: #505bda;
                    color: #ffffff;
                }
            }
            &:nth-child(2){
                margin-top: 10px;
            }
        }
        > span {
            width: 55px;
            height: 22px;
            font-weight: bold;
        }
        > p {
            margin: 0;
            margin-bottom: 43px;
        }
        > .email {
            color: #7f7f7f;
            margin-bottom: 15px;
        }
    }
    > footer {
        width: 100%;
        height: 52px;
        text-align: center;
        border-bottom: 3px solid rgba(249,250,254,1);
        > span {
            width: 78px;
            height: 22px;
            font-size: 20px;
            font-weight: bold;
            line-height: 22px;
        }
    }
`;

export const UpdateProfileWrapper = styled.div`
    width: 600px;
    height: 650px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    background-color: #ffffff;
    > header {
        height: 53px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        border-bottom: 3px solid #f9fafe;
        > div {
            display: flex;
            align-items: center;
            > span {
                width: 96px;
                height: 22px;
                font-size: 17px;
                font-weight: bold;
            }
            > img {
                cursor: pointer;
                margin-right: 15px;
            }
        }
        > button {
            width: 58px;
            height: 30px;
            border-radius: 15px;
            border: none;
            color: #ffffff;
            background-color: #505bda;
            cursor: pointer;
            outline: none;
        }
    }
    > main {
        padding: 0 15px;
        > header{
            width: 600px;
            height: 200px;
            background-color: #f9fafe;
            position: relative;
            right: 15px;
        }
        > .profile_image { 
            position: relative;
            bottom: 58px;
            width: 116px;
            height: 116px;
            border: 3px solid #ffffff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            > label {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                width: 116px;
                height: 116px;
                cursor: pointer;
                background-image: url(${ProflieImage});
                background-size: cover;
                border-radius: 50%;
                > img {
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                }
            }
            > input {
                width: 0;
                height: 0;
                display: none;
            }
            
        }
        > .sentence-state {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0;
            width: 100%;
            height: 29px;
            margin-bottom: 4px;
            border: none;    
            box-sizing: border-box;
            outline: none;
            background-color: transparent;
            > span {
                display: inline-block;
                color: #e84444;
                font-size: 12px;
                margin-bottom: 16px;
                line-height: 24px;
            }
            p {
                margin: 0px 4px 0 0;
                float: right;
                color: #707070;
                font-size: 14px;
                line-height: 24px;
            }
        }
    }
`;

export const Background = styled.div`
    position: absolute;
    width: 1920px;
    height: 100vh;
    top: 0;
    left: 0;
    opacity: 0.4;
    background-color: #000000;
`;

export const FollowerWrapper = styled.div`
    width: 600px;
    height: 650px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    background-color: #ffffff;
    > header {
        height: 67px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        > div {
            margin-top: 15px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            > span {
                width: 96px;
                height: 22px;
                font-size: 17px;
                font-weight: bold;
            }
            > img {
                cursor: pointer;
                width: 22px;
                height: 22px;
            }
        }
    }
`;

export const UserItemWrapper = styled.div`
         display: flex;
         align-items: center;
         width: 600px;
         height: 79px;
         border-bottom: 3px solid #f9fafe;
         > a {
             text-decoration: none;;
             > div {
                width: 79px;
                height: 79px;
                display: flex;
                justify-content: center;
                align-items: center;
                > img {
                    width: 49px;
                    height: 49px;
                    border-radius: 50%;
                }
            }
        }
         > main {
           height: 79px;
            padding-top: 15px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
           > a {
               text-decoration: none;
               > span {
                    width: auto;
                    height: 18px;
                    font-size: 16px;
                    font-weight: bolder;
                    color: #000000;
                    margin-bottom: 7px;
                }    
           }
           > p {
             margin: 0;
             width: 134px;
             height: 16px;
             line-height: 16px;
             font-size: 14px;
             color: #7f7f7f;
           }
         }
       `;