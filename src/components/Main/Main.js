import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Home from './Home/Home';
// import DetailPost from './DetailPost/DetailPost';
import CheckToken from '../../components/CheckToken/CheckToken';
// import ViewMore from './ViewMore';
import queryString from 'query-string';
// import * as S from './styles';

const Main = ({ location, isLogin, setIsLogin }) => {
    let { category } = useParams();
    if (category === 'post')
        var query = queryString.parse(location.search);
    return (
        <CheckToken category="main" refreshToken={isLogin.refresh_token}>
            <Header />
            {/* <S.HomeWrapper> */}
                {/* <S.MainWrapper> */}
                    {
                        // (category === 'post' && <DetailPost query={query} />) ||
                        (category === 'home' && <Home />) ||
                        (category === 'search' && <Home />) ||
                        (category === 'profile' && <Home />) ||
                        (category === undefined && <Home />)
                    }
                    {/* <ViewMore /> */}
                {/* </S.MainWrapper>        */}
            {/* </S.HomeWrapper>  */}
        </CheckToken>
    );
};

export default Main;