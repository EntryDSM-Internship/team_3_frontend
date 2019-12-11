import styled from 'styled-components';

export const DetailWrapper = styled.div`
        overflow: hidden;
         overflow-y: scroll;
         -ms-overflow-style: none;
         width: 750px;
         height: 100%;
         box-sizing: border-box;
         border-right: 3px solid rgba(249, 250, 254, 1);
         &::-webkit-scrollbar {
           display: none;
         }
         > header {
           padding-left: 15px;
           width: 100%;
           height: 53px;
           display: flex;
           align-items: center;
           border-bottom: 3px solid rgba(249, 250, 254, 1);
           > a, a > img {
             width: 23px;
             height: 23px;
             margin-right: 15px;
             cursor: pointer;
           }
           > span {
             width: 44px;
             height: 18px;
             font-size: 14px;
             font-weight: bold;
           }
         }
       `;