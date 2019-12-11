import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 8px 0 8px;
  width: 100%;
  height: 56px;
  border: none;
  border-bottom: 1.5px solid #818181;
  background-color: #f5f8fa;
  box-sizing: border-box;
  outline: none;
  line-height: 41.5px;
  label {
    width: 100%;
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    color: #707070;
  }
  input {
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 22px;
  }
  form {
    display: flex;
    input {
      flex: 1;
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 22px;
    }
  }
  > div {
    display: flex;
    justify-content: space-between;
    height: 29.5px;
    form {
      input {
        width: 88%;
        height: 100%;
        border: none;
        outline: none;
        background-color: transparent;
        font-size: 22px;
      }
    }

    div {
      user-select: none;
      display: flex;
      margin: 0;
      color: #e84444;
      span {
        line-height: 36px;
      }
    }
  }
`;
