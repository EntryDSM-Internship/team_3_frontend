import React from 'react';
import { ContentsWrapper } from './styles';

const BoardContent = ({ info }) => {
    return (
        <ContentsWrapper>
            <header>
                <span className="name">{info.name}</span>
                <span className="date">{info.date}</span>
            </header>
            <main>
                {info.contents}
            </main>
            <footer>
                <div>
                    <button className="like"></button>
                    <span>{info.likes}</span>
                </div>
                <div>
                    <button className="comment"></button>
                    <span>{info.comment}</span>
                </div>
            </footer>
        </ContentsWrapper>
    );
};

export default BoardContent;