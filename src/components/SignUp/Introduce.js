import React from 'react';
import { Contents } from './Styles';
import { InputWrapper } from "../Common/Common";
const Introduce = ({ info, setInfo, onSubmit }) => {
    const onChange = (e) => {
        setInfo({
          ...info,
          introduction: e.target.value
        });
    }
    return (
      <>
        <Contents>
          <h3>한 줄 소개를 입력하세요.</h3>
          <h5>프로필에 표시할 한 줄 소개를 입력하세요.</h5>
          <InputWrapper>
            <label htmlFor="introduction">한 줄 소개</label>
            <form onSubmit={onSubmit}>
              <input
              maxLength="60"
              type="text"
              onChange={onChange}
              value={info.introduction === null ? "" : info.introduction}
              id="introduction"
            />
            </form>
          </InputWrapper>
          <div className="sentence-state">
            <span></span>
            <p>
              <span>
                {info.introduction === null ? "0" : info.introduction.length}
              </span>
              <span>/60</span>
            </p>
          </div>
        </Contents>
      </>
    );
};

export default Introduce;