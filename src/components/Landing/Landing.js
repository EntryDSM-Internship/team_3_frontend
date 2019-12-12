import React from 'react';
import { Link } from 'react-router-dom';
import { LandingWrapper, MainBlock, Main, GuideContent } from './styles';
import messeage from '../../img/Landing/messeage.png';
import people from '../../img/Landing/people.png';
import search from '../../img/Landing/search.png';
import CheckToken from '../../components/CheckToken/CheckToken';

const Landing = ({ isLogin, setIsLogin }) => {
    return (
        <CheckToken category="landing" refreshToken={isLogin.refreh_token}>
            <LandingWrapper>
                <MainBlock>
                    <Main>
                        <h1>지금 세계 곳곳에서 무슨 일이<br/>일어나고 있는지 확인하세요.</h1>                    
                        <GuideContent>
                            <img src={search} alt="검색" />
                            <p>다른 사람을 찾아보세요.</p>
                        </GuideContent>
                        <GuideContent>
                            <img src={people} alt="사람" />
                            <p>자신의 일을 사람들과 함께 나눠보세요.</p>
                        </GuideContent>
                        <GuideContent>
                            <img src={messeage} alt="메시지" />
                            <p>다른 사람의 일에 자신의 의견을 올려보세요.</p>
                        </GuideContent>
                        <Link to="/auth/login" className="login">로그인</Link>
                        <Link to="/auth/signup" className="sign-up">가입하기</Link>
                    </Main>
                </MainBlock>
            </LandingWrapper>
        </CheckToken>
    );
};

export default Landing;