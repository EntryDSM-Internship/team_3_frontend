import React from "react";
import * as S from "../Home/styles";
import { ContentsWrapper } from "../Home/styles";
import ProfileImage from "../../../img/Main/ProfileImage.png";

const Comment = ({ info }) => {
    return (
      <S.BoardItemWrapper>
        <S.ProfileBlock>
          <img src={ProfileImage} alt="프로필 이미지" />
        </S.ProfileBlock>
        <ContentsWrapper>
          <header>
            <span className="name">{info.name}</span>
            <span className="date">{info.date}</span>
          </header>
          <main>{info.contents}</main>
        </ContentsWrapper>
      </S.BoardItemWrapper>
    );
};

export default Comment;