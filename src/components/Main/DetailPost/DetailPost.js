import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import BoardItem from '../Home/BoardItem';
import CommentList from './CommentList';
import GoHome from '../../../img/Main/goHome.png';
import * as S from './styles';
import { ProfileBlock, BoardItemWrapper, ContentsWrapper } from '../Home/styles';
import ProfileImage from "../../../img/Main/ProfileImage.png";

const DetailPost = ({ myInfo, query, token }) => {
  const [comment, setComment] = useState();
  const [boardInfo, setBoardInfo] = useState({}); 
    useEffect(() => {
      axios({
        url: `http://13.125.249.23/post/${query.id}`,
        method: 'get',
        headers: {
          'Authorization': token.access_token,
        }
      }).then(res => {
        setBoardInfo(res.data.post);
      }).catch(err => {
      })
    }, []);
  function adjustHeight() {
    var textEle = document.querySelector('textarea');
    textEle.setAttribute('minHeight', '100px');
    textEle.style.height = 'auto';
    var textEleHeight = textEle.scrollHeight;
    textEle.style.height = `${textEleHeight - 19}px`;
    setComment(textEle.value);
  };
  const onComment = () => {
    axios({
      url: `http://13.125.249.23/post/${query.id}/comment`,
      method: 'post',
      headers: {
        'Authorization': token.access_token,
      },
      data: {
        comment: comment
      }
    }).then(res => {
      window.location.reload();
    }).catch(err => {
    })
  }
    return (
      <S.DetailWrapper>
        <header>
          <Link to="/">
            <img src={GoHome} alt="홈으로" />
          </Link>
          <span>홈으로</span>
        </header>
        <BoardItem info={boardInfo} token={token} />
        <BoardItemWrapper>
            <ProfileBlock>
              <Link to={`/user/${boardInfo.userId}`}>
                <img src={Object.keys(myInfo).length === 0 || boardInfo === undefined? ProfileImage : `http://13.125.249.23/profileimgs/${myInfo.profileImg}`} alt="프로필 사진" />
              </Link>
            </ProfileBlock>
          <ContentsWrapper>
            <textarea
              onKeyUp={adjustHeight}
              placeholder="자신의 일을 공유해보세요"
            />
            <div><button onClick={onComment}>댓글</button></div>
          </ContentsWrapper>
        </BoardItemWrapper>
        <CommentList token={token} boardId={query.id} />
      </S.DetailWrapper>
    );
};

export default DetailPost;