import React, { useEffect, useRef } from 'react';
import { Contents } from './Styles';
import { InputWrapper } from "../Common/Common";

const VerificationCode = ({ Code, setCode, InputState, countDown, setCountDown, time, setTime, onSubmit }) => {
  const onChange = (e) => {
    setCode(e.target.value);
  }
  useEffect(() => {
    if (!countDown) {
      setCountDown(!countDown);    
    }
  }, []);
    
    return (
      <>
        <Contents>
          <h3>인증코드를 입력하세요.</h3>
          <h5>이전 단계에서 입력한 이메일로 인증코드를 발송했습니다.</h5>
          <InputWrapper>
            <label htmlFor="code">인증번호</label>
            <div>
              <form onSubmit={onSubmit}>
                <input type="text" value={Code} onChange={onChange} id="code" target={Code} />
              </form>
              <div><span>{time.minute}</span><span>분&nbsp;</span>
    <span>{time.second === 0 ? '00' : time.second}</span><span>초</span></div>
            </div>
          </InputWrapper>
          <div className="sentence-state">
    <span>{InputState.state[0]}</span>
            <p>
              <span></span>
              <span></span>
            </p>
          </div>
        </Contents>
      </>
    );
};

export default VerificationCode;