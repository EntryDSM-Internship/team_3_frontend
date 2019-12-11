import React from 'react';
import { Link } from 'react-router-dom';
import BoardItem from '../Home/BoardItem';
import CommentList from './CommentList';
import GoHome from '../../../img/Main/goHome.png';
import * as S from './styles';

const borderList = [
    {
        key: "1",
        name: "김해건",
        date: "2019년 9월 3일",
        contents: "그 어느때보다 신기롭다.그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다",
        likes: 1234,
        comment: 234
    }
];
const DetailPost = () => {
    return (
      <S.DetailWrapper>
        <header>
          <Link to="/">
            <img src={GoHome} alt="홈으로" />
          </Link>
          <span>홈으로</span>
        </header>
        <BoardItem info={borderList[0]} />
        <CommentList />
      </S.DetailWrapper>
    );
};

export default DetailPost;