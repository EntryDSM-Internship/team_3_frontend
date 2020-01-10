import styled from 'styled-components';
import Like from '../../../img/Main/Like.png';
import Comment from '../../../img/Main/Comment.png';
import DeletePost from '../../../img/Main/DeletePost.png';

export const BoardWrapper = styled.div`
    overflow-y: scroll;
    width: 750px;
    height: 100%;
    box-sizing: border-box;
    border-right: 3px solid rgba(249, 250, 254, 1);
`;



export const BoardItemWrapper = styled.div`
         display: flex;
         padding: 15px;
         box-sizing: border-box;
         width: 100%;
         min-height: 79px;
         height: auto;
         border-bottom: 3px solid rgba(249, 250, 254, 1);
         box-sizing: border-box;
       `;

export const ProfileBlock = styled.div`
    width: 49px;
    height: 49px;
    margin: 0;
    > img {
        width: 49px;
        height: 49px;
        border-radius: 50%;
        cursor: pointer;
      }
    > a {
      text-decoration: none;
      > img {
        width: 49px;
        height: 49px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
`;

export const ShareBoardWrapper = styled.div`
    width: 856px;
    height: auto;
    margin-left: 15px;
    margin-top: 14px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > textarea {
        overflow: scroll;
        resize: none;
        max-width: 593px;
        min-height: 65px;   
        height: auto;
        border: none;
        font-size: 18px;
        text-align: left;
        color: #7f7f7f;
    }
    > input:focus {
        outline: 2px solid blue;
    }
    > div {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        > label {
            margin: 0;
            width: 24px;
            height: 24px;
            > img {
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
        }
        input {
            width: 0px;
            height: 0px;
            border: none;
        }
        > button {  
            width: 63px;
            height: 39px;
            border: none;
            border-radius: 20px;
            background-color: #737be1;
            color: #ffffff;
            cursor: pointer;
            outline: none;
        }
    }
`;

export const ContentsWrapper = styled.div`
         width: 856px;
         height: auto;
         margin-left: 15px;
         box-sizing: border-box;
         display: flex;
         flex-direction: column;
         > textarea {
           resize: none;
                box-sizing: border-box;
                min-height: 49px;   
                border: none;
                text-align: left;
                color: #7f7f7f;
          }
          > div {
            margin-top: 8px;
            display: flex;
            justify-content: flex-end;
            > button {
                  width: 63px;
                  height: 39px;
                  border: none;
                  border-radius: 20px;
                  background-color: #737be1;
                  color: #ffffff;
                  cursor: pointer;
                  outline: none;
            }
          }
         header {
           height: 18px;
           line-height: 18px;
           margin-bottom: 7px;
           > a { text-decoration: none; }
           .name {
             width: 44px;
             height: 18px;
             font-weight: bold;
             margin-right: 15px;
             font-size: 13.949px;
           }
           .date {
             width: 89px;
             height: 16px;
           }
         }
         a {
           color: #000000;
           text-decoration: none;
          main {
            min-height: 16px;
            line-height: 16px;
            margin-bottom: 1px;
            > div {
              display: flex;
              > img {
                margin-top: 15px;
                margin-right: 8px;
                width: 300px;
                height: auto;
                object-fit: fill;
              }
            }
          }
         }

         footer {
           position: relative;
           margin-top: 17px;
           display: flex;
           height: 20px;
           div {
             display: flex;
             align-items: center;
             > button, > a > button {
               margin-right: 8px;
               cursor: pointer;
               outline: none;
               padding: 0;
               width: 20px;
               height: 20px;
               border: none;
               background-size: contain;
               background-color: transparent;
             }
             > span {
               height: 20px;
               line-height: 20px;
             }
             .like {
             }
             .comment {
               background-image: url(${Comment});
             }
             .delete {
               background-image: url(${DeletePost});
             }
           }
           div:nth-last-child(1) {
              position: absolute;
              right: 0;
           }
           div + div {
             margin-left: 150px;
           }
         }
       `;

export const PreviewImageWrapper = styled.article`
    width: 100%;
    height: auto;
    margin-top: 10px;
    display: flex;
     > div {
       display: flex;
       padding-right: 10px;
       box-sizing: border-box;
       position: relative;
      > button {
        width: 20px;
        height: 20px;
        border: none;
        padding: 0;
        background: none; 
        position: absolute;
        right: 10px;
        cursor: pointer;
        outline:none;
        > img {
          width: 20px;
          height: 20px;
        }
      }
      > img {
        width: 100px;
        height: 100px;
        object-fit: fill;
        outline: none;
      }
    }
`;