import React, { useEffect, useState, useRef } from 'react';
import * as S from './styles';
import axios from 'axios';
import BoardList from "./BoardList";

const Home = ({ myInfo, token }) => {
  const [page, setPage] = useState(0);
  const [boardList, setBoardList] = useState([]);
  const scrollBody = useRef();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios({
      url: `http://13.125.249.23/posts/${page}`,
      method: 'get',
      headers: {
        'Authorization': token.access_token
      }
    }).then(res => {
      setBoardList(boardList.concat(res.data.posts));
      setLoading(true);
    }).catch(err => {
    });
    scrollBody.current.addEventListener('scroll', () => {
      if ((scrollBody.current.scrollTop + scrollBody.current.clientHeight) === scrollBody.current.scrollHeight && loading) {
        setLoading(false);
        setPage(state => state + 1);
      }
    });
  }, [page]);

  return (
      <S.BoardWrapper ref={scrollBody}>
        <BoardList isMine={true} boardList={boardList} token={token} myInfo={myInfo} />
      </S.BoardWrapper>
    );
};

export default Home;