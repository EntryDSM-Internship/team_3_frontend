import React, { useState } from "react";
import Header from "./Header";
import Home from "./Home/Home";
import DetailPost from "./DetailPost/DetailPost";
import CheckToken from "../../components/CheckToken/CheckToken";
import ViewMore from "./ViewMore";
import Search from './Search/Search';
import Profile from './Profile/Profile';
import queryString from "query-string";
import * as S from "./styles";

const Main = ({ alertOn, location, match, token, setToken }) => {
  const pathName = location.pathname;
  const [userId, setUserId] = useState();
  const [myInfo, setMyInfo] = useState({});
  const category = match === undefined ? undefined : match.url;
  let query
  if (category === "/post") query = queryString.parse(location.search);
  return (
    <CheckToken alertOn={alertOn} category="main" token={token} setToken={setToken}>
      <Header token={token} userId={userId} setUserId={setUserId} setMyInfo={setMyInfo} />
      <S.HomeWrapper>
        <S.MainWrapper> 
          {
          (category === "/post" && <DetailPost myInfo={myInfo} query={query} token={token} />) ||
            (category === "/home" && <Home token={token} myInfo={myInfo} />) ||
            (category === "/search" && <Search token={token} />) ||
            (category === "/user" && <Profile myInfo={myInfo} userId={userId} setUserId={setUserId} pathName={pathName} token={token} />) ||
            (category === undefined && <Home token={token} myInfo={myInfo} />) 
            || window.location.replace('/')
          }
          <ViewMore token={token} myInfo={myInfo} />
        </S.MainWrapper>
      </S.HomeWrapper>
    </CheckToken>
  );
};

export default Main;
