import React from 'react';
import { HomeWrapper, MainWrapper, BoardWrapper, SideWrapper } from './styles';
import BoardItem from './BoardItem';
import ViewMore from './ViewMore';

const Home = () => {
    return (
        <HomeWrapper>
            <MainWrapper>
                <BoardWrapper>
                    <BoardItem />
                </BoardWrapper>
                <SideWrapper>
                    <ViewMore />
                </SideWrapper>
            </MainWrapper>
        </HomeWrapper>
    );
};

export default Home;