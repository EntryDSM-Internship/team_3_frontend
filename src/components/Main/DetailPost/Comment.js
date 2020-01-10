import React from "react";
import { Link } from 'react-router-dom';
import * as S from "../Home/styles";
import { ContentsWrapper } from "../Home/styles";

const Comment = ({ info }) => {
  const date = new Date(info.createdAt);
    return (
      <S.BoardItemWrapper>
        <S.ProfileBlock>
          <Link to={`/user/${info.userId}`} >
            <img src={`http://13.125.249.23/profileimgs/${info.user.profileImg}`} alt="프로필 이미지" />
          </Link>
        </S.ProfileBlock>
        <ContentsWrapper>
          <header>
            <Link to={`/user/${info.userId}`} >
              <span className="name">{info.user.username}</span>
            </Link>
            <span className="date">{`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`}</span>
          </header>
          <main>{info.comment}</main>
        </ContentsWrapper>
      </S.BoardItemWrapper>
    );
};

export default Comment;