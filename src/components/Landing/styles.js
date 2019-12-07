import styled from 'styled-components';

export const LandingWrapper = styled.div`
    background-color: #737be1;
    height: 946px;
`;

export const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: auto;
    max-width: 1170px;
    min-width: 405px;
    height: 100%;
    background: #ffffff;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 405px;
    min-height: 548px;
    h1 {
        font-size: 29px;
        line-height: 1.13;
        letter-spacing: 0.96px;
        text-align: left;
        margin: 0;
        margin-bottom: 90px;
    }
    a {
        height: 36px;
        border: none;
        border-radius: 17px;
        text-decoration: none;
        text-align: center;
        line-height: 36px;
    }
    .login {
        margin-top: 90px;
        margin-bottom: 45px;
        height: 36px;
        border: none;
        border: 1px solid #505bda;
        border-radius: 17px;
        background-color: #ffffff;
        color: #505bda;
    }
    .sign-up {
        height: 36px;
        border: none;
        border: 1px solid #ffffff;
        border-radius: 17px;
        background-color: #505bda;
        color: #ffffff;
    }
`;

export const GuideContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    img { 
        width: 40px;
        height: 40px;
        margin-right: 30px;
    }
    p {
        margin: 0;
        padding: 11px 0;
        height: 18px;
        line-height: 1.13;
    }
    & + & {
        margin-top: 30px;
    }
`;