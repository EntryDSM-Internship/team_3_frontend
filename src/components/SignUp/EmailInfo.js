import React from 'react';
import { Contents, UserInfoInput } from './Styles';

const EmailInfo = ({ Info, setInfo, InputState, onSubmit }) => {
    
    const onChange = (e) => {
      setInfo({
        ...Info,
        email: e.target.value
      });
    }
    return (
      <>
        <Contents>
          <h3>계정을 생성하세요</h3>
          <h5>로그인 시 이용할 이메일을 입력하세요.</h5>
          <UserInfoInput>
            <label htmlFor="email">이메일</label>
            <form onSubmit={onSubmit}>
              <input type="text" value={Info.email} onChange={onChange} maxLength="30" id="email" />
            </form>
          </UserInfoInput>
          <div className="sentence-state">
            <span>{InputState.state[0]}</span>
            <p>
              <span>{Info.email === '' ? "0" : Info.email.length}</span>
              <span>/30</span>
            </p>
          </div>
        </Contents>
      </>
    );
};

export default EmailInfo;
