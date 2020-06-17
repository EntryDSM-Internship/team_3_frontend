import React from 'react';
import * as S from './Styles';
import { Link } from 'react-router-dom'
const UserItem = ({ setUserId, info }) => {
    return (
      <S.UserItemWrapper>
        <Link onClick={() => setUserId(info.id)} to={`../user/${info.id}`}>
          <div>
            <img src={`http://13.125.249.23/profileImgs/${info.profileImg}`} alt="프로필사진" />
          </div>
        </Link> 
        <main>
          <Link to={`../user/${info.id}`}>
            <span>{info.username}</span>
          </Link>
          <p>{info.introduction}</p>
        </main>
      </S.UserItemWrapper>
    );
};

export default UserItem;