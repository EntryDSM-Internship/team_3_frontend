import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import ProfileImage from '../../../img/Main/ProfileImage.png';
import BoardContent from './BoardContent';


const BoardItem = ({ token, info }) => {
    return (
        <>
            <S.BoardItemWrapper>
                <S.ProfileBlock>
                    <Link to={`/user/${info.userId}`}>
                        <img src={Object.keys(info).length === 0 || info === undefined || info === null ? ProfileImage :`http://13.125.249.23/profileimgs/${info.user.profileImg}`} alt="프로필 이미지" />
                    </Link>
                </S.ProfileBlock>
                <BoardContent key={info.id} token={token} info={info} />
            </S.BoardItemWrapper>
        </>
    );
};

export default BoardItem;