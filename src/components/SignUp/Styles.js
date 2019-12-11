import styled from 'styled-components';

export const Contents = styled.div`
    .sentence-state {
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
`;