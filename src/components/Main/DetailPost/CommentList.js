import React, { useState , useEffect } from 'react';
import Comment from './Comment';
import axios from 'axios';
const CommentList = ({ token, boardId }) => {
  const [commentInfo, setCommentInfo] = useState([]);
  useEffect(() => {
    axios({
      url: `http://13.125.249.23/post/${boardId}/comments`,
      method: 'get',
      headers: {
        'Authorization': token.access_token,
      }
    }).then(res => {
      setCommentInfo(res.data.comments)
    }).catch(err => {
    })  
  }, []);
    return (
        <>
        {
            commentInfo.map(info => (<Comment key={info.id} info={info} />))
        }
        </>
    );
};

export default CommentList;