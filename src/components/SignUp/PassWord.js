import React from 'react';
import { Contents, UserInfoInput } from './Styles';

const PassWord = ({ Info, setInfo, InputState, password, setPassword, onSubmit }) => {
  const onChange = (e) => {
      setInfo({
        ...Info,
        password: e.target.value
      });
      
  }
  const check = (e) => {
    setPassword(e.target.value);
  }
    return (
      <>
        <Contents>
          <h3>비밀번호를 생성하세요</h3>
          <h5>로그인 시 이용할 비밀번호를 입력하세요.</h5>
          <UserInfoInput>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              onChange={onChange}
              id="password"
              value={Info.password}
            />
          </UserInfoInput>
          <div className="sentence-state">
            <span>영문·숫자 조합으로 최소 8자이상 입력하세요.</span>
            <p>
              <span></span>
              <span></span>
            </p>
          </div>

          <UserInfoInput>
            <label htmlFor="password-check">비밀번호 확인</label>
            <form onSubmit={onSubmit}>
              <input type="password" id="password-check" onChange={check} value={password} />
            </form>
          </UserInfoInput>
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

export default PassWord;