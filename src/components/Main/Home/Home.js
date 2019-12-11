import React from 'react';
import * as S from './styles';
import BoardList from "./BoardList";



const Home = () => {
    return (
      <S.BoardWrapper>
        <BoardList />
      </S.BoardWrapper>
    );
};

export default Home;