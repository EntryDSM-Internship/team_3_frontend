import React, { useState } from 'react';
import * as S from './styles';
import { Input } from '../SignUp/Styles';
import { Link, useHistory } from 'react-router-dom';
import goFirstPage from '../../img/Login/goFirstPage.png';
import Axios from 'axios';

const Login = ({ isLogin, setIsLogin }) => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const handleEmail = (e) => {
        setLoginInfo({
            ...loginInfo,
            email: e.target.value
        })
    }
    const handlePassword = (e) => {
        setLoginInfo({
            ...loginInfo,
            password: e.target.value
        })
    }
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const url = 'http://13.125.249.23';
        Axios({
            url: `${url}/auth/login`,
            method: 'post',
            data: {
                email: loginInfo.email,
                password: loginInfo.password
            }
        }).then(res => {
            setIsLogin({
                "access_token": res.data.access_token,
                "refresh_token": res.data.refresh_token
            });
            history.push('/home');
        }).catch(e => {
            setInputState(['잘못된 이메일입니다.', '잘못된 비밀번호입니다.']);
            console.log(loginInfo);
            console.log(e);
        })
        
    }
    const [inputState, setInputState] = useState([
        '', ''
    ]);
    return (
        <S.LoginWrapper>
            <S.ModalBlock>
                <Link to="/">
                    <img src={goFirstPage} alt="처음페이지로"/>
                </Link>
                <S.LoginBlock>
                    <h3>로그인 하세요</h3>
                    <h5>로그인 후 스퀴커를 이용하실 수 있습니다.</h5>
                    <Input>
                        <label htmlFor="email">이메일</label>
                        <input type="text" maxLength="30" id="email" onChange={handleEmail} value={loginInfo.email} />
                    </Input>
                    <div className="sentence-state">
                        <span>{inputState[0]}</span>
                    </div>
                    <Input>
                        <label htmlFor="password">비밀번호</label>
                        <form onSubmit={onSubmit}>
                            <input type="password" id="password" value={loginInfo.password} onChange={handlePassword}/>
                        </form>
                    </Input>
                    <div className="sentence-state">
                        <span>{inputState[1]}</span>
                    </div>
                </S.LoginBlock>
                <footer>
                    <button className="login" onClick={onSubmit}>로그인</button>
                </footer>
            </S.ModalBlock>
        </S.LoginWrapper>
    );
};

export default Login;