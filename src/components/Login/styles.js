import styled from 'styled-components';

export const LoginWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    background-color: #bababa;
    > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 650px;
    border-radius: 16px;
    background-color: #ffffff;
    margin: 0 auto;
    a {
      cursor: pointer;  
      float: left;
      margin: 16px 0 0 16px;
      visibility: inherit;
    }
    main {
      display: flex;
      flex-direction: column;
      width: 520px;
      height: 477px;
      margin: 96px 40px 0 40px;
      h3 {
        margin: 0 0 8px 0;
        font-size: 24px;
        letter-spacing: 0.72px;
        height: 26px;
        line-height: 27px;
      }
      h5 {
        margin: 0;
        height: 18px;
        font-size: 16px;
        line-height: 18px;
        font-weight: normal;
        margin-bottom: 48px;
      }
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
    }
    
    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 15px;
      width: 570px;
      height: 36px;
      box-sizing: border-box;
      .login {
        border: none;
        width: 405px;
        height: 36px;
        border-radius: 17px;
        background-color: #505bda;
        cursor: pointer;
        color: #ffffff;
        font-size: 14px;
      }
    }
  }
`;