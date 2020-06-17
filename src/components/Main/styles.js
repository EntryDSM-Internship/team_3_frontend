import styled from 'styled-components';
export const SideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    align-items: center;
    justify-content: space-between;
    margin: 60px 15px 30px 45px;
    > img {
        width: 173px;
        height: 18px;
    }
`;

export const ViewMoreBlock = styled.div`
    box-sizing: border-box;
    width: 360px;
    min-height: 252px;
    height: auto;
    padding-top: 15px;
    border-radius: 16px;
    background-color: #dbdeff;
    header { 
        padding-bottom:15px;
        height: 37px;
        box-sizing: border-box;
        h1 {
            padding-left: 15px;
            margin: 0;
            font-size: 23px;
            height: 22px;
            line-height: 22px;
        }
    }
    ul {
        margin: 0;
        padding: 0;
        height: auto;
        li {
            box-sizing: border-box;
            padding: 16px 15px;
            height: 50px;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 2px solid rgba(214, 230, 224, 1);
            > h2 {
                margin: 0;
                width: auto;
                height: 18px;
                font-size: 14.9799px;
                line-height: 18px;
                letter-spacing: 0;
                text-align: left;
                color: #3b3b3b;
            }
            img {
                cursor: pointer;
                width: 20px;
                height: 20px;
                background-size: contain;
            }
        }
        > div {   
            display: none;
            padding: 16px 15px;
            > h2 {
                margin: 0;
                width: auto;
                height: 18px;
                font-size: 14.9799px;
                line-height: 18px;
                letter-spacing: 0;
                text-align: left;
                color: #3b3b3b;
                margin-bottom: 15px;
                display: inline-block;
            }
            #switch_background {
                padding: 2px 4px;
                float: right;
                display: flex;
                margin-top: 4px;
                /* justify-content: flex-end; */
                align-items: center;
                width: 28px;
                height: 12px;
                border-radius: 12px;
                background-color: #000000;
                /* &.on {
                    animation: switchOn .3s;
                    justify-content: flex-end;
                }
                &.off {
                    animation: switchOff .3s;
                    justify-content: flex-start;
                } */
                > #switch_circle {
                    float: right;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: #dbdeff;
                }
                @keyframes switchOn {
                from { justify-content: flex-start; }
                to { justify-content: flex-end; }
                }
                @keyframes switchOff {
                from { justify-content: flex-end; }
                to { justify-content: flex-start; }
                }
            }
        }
    }
`;

export const HomeWrapper = styled.div`
    background-color: #fbfbfb;
    height: 887px;
`;

export const MainWrapper = styled.div`
    display: flex;
    width: 1170px;
    height: 100%;
    margin: 0 auto;
    background-color: #ffffff;
`;