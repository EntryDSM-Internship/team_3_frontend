import React from 'react';
import * as S from './styles';
import BoardItem from './BoardItem';
import ViewMore from './ViewMore';

const Home = () => {
    return (
        <S.HomeWrapper>
            <S.MainWrapper>
                <S.BoardWrapper>
                    <BoardItem />
                </S.BoardWrapper>
                <S.SideWrapper>
                    <ViewMore />
                </S.SideWrapper>
            </S.MainWrapper>
        </S.HomeWrapper>
    );
};

export default Home;