import React from 'react';
import * as S from './Styles';
import { Link } from 'react-router-dom';
const SerachResultItem = ({ info }) => {
    return (
        <S.SearchItemWrapper>
            <div className="profile_image">
                <Link to={`/user/${info.id}`}>
                    <img src={`http://13.125.249.23/profileImgs/${info.profileImg}`} alt="프로필 사진" />
                </Link>
            </div>
            <main>
                <header>
                    <Link to={`/user/${info.id}`}>
                        <span>{info.username}</span>
                    </Link>
                    <span>{info.email}</span>
                </header>
                <p>{info.introduction}</p>
            </main>
        </S.SearchItemWrapper>
    );
};

export default SerachResultItem;