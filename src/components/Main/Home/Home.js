import React from 'react';
import { HomeWrapper, MainWrapper, BoardWrapper, SideWrapper } from './styles';
import BoardItem from './BoardItem';

const Home = () => {
    return (
        <HomeWrapper>
            <MainWrapper>
                <BoardWrapper>
                    <BoardItem />
                </BoardWrapper>
                <SideWrapper>
                    
                </SideWrapper>
            </MainWrapper>
        </HomeWrapper>
    );
};

export default Home;