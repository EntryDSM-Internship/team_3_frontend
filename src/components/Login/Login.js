import React from 'react';
import * as S from './styles';
import { Input } from '../SignUp/Styles';
import { Link } from 'react-router-dom';
import goFirstPage from '../../img/Login/goFirstPage.png';

const Login = ({ isLogin, setIsLogin }) => {
    console.log(isLogin);
    console.log(setIsLogin);
    return (
        <S.LoginWrapper>
            <S.ModalBlock>
                <Link to="/landing">
                    <img src={goFirstPage} alt="처음페이지로"/>
                </Link>
                <S.LoginBlock>
                    <h3>로그인 하세요</h3>
                    <h5>로그인 후 스퀴커를 이용하실 수 있습니다.</h5>
                    <Input>
                        <label htmlFor="email">이메일</label>
                        <input type="text" maxLength="30" id="email" />
                    </Input>
                    <div className="sentence-state">
                        <span>영문·숫자 조합으로 최소 8자이상 입력하세요.</span>
                        <p>
                            <span></span>
                            <span></span>
                        </p>
                    </div>
                    <Input>
                        <label htmlFor="password-check">비밀번호 확인</label>
                        <form>
                            <input type="password" id="password-check" />
                        </form>
                    </Input>
                    <div className="sentence-state">
                        <span>영문·숫자 조합으로 최소 8자이상 입력하세요.</span>
                        <p>
                            <span></span>
                            <span></span>
                        </p>
                    </div>
                </S.LoginBlock>
                <footer>
                    <button className="login">로그인</button>
                </footer>
            </S.ModalBlock>
        </S.LoginWrapper>
    );
};

export default Login;