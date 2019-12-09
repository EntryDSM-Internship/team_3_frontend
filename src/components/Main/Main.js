import React from 'react';
import { useParams } from 'react-router';
import Header from './Header';
import Home from './Home/Home';
import CheckToken from '../../components/CheckToken/CheckToken';

const Main = ({ isLogin, setIsLogin }) => {
    let { category } = useParams();
    return (
        <CheckToken accessToken={isLogin.access_token}>
            <Header />
            {
                (category === 'home' && <Home />) ||
                (category === 'search' && <Home />) ||
                (category === 'profile' && <Home />) ||
                (category === undefined && <Home/>)
            }
        </CheckToken>
    );
};

export default Main;