import React from 'react';
import * as S from './styles';
import ProfileImage from '../../../img/Main/ProfileImage.png';
import BoardContent from './BoardContent';


const BoardItem = ({ info }) => {
    return (
        <>
            <S.BoardItemWrapper>
                <S.ProfileBlock>
                    <img src={ProfileImage} alt="프로필 이미지" />
                </S.ProfileBlock>
                <BoardContent key={info.key} info={info} />
            </S.BoardItemWrapper>
        </>
    );
};

export default BoardItem;