import React from 'react';
import { Contents } from './Styles';
import { InputWrapper } from "../Common/Common";

const Name = ({ Info, setInfo, InputState, onSubmit }) => {
  const onChange = (e) => {
    setInfo({
      ...Info,
      username: e.target.value
    });
  };
    return (
      <Contents>
        <h3>이름을 생성하세요</h3>
        <h5>트위터에서 보여질 이름을 입력하세요.</h5>
        <InputWrapper>
          <label htmlFor="name">이름</label>
          <form onSubmit={onSubmit}>
            <input type="text" value={Info.username} onChange={onChange} maxLength="12" id="name" />
          </form>
        </InputWrapper>
        <div className="sentence-state">
          <span>{InputState.state[0]}</span>
          <p>
            <span>{Info.username === '' ? "0" : Info.username.length}</span>
            <span>/12</span>
          </p>
        </div>
      </Contents>
    );
};

export default Name;