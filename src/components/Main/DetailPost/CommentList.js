import React from 'react';
import Comment from './Comment';
const borderList = [
  {
    key: "1",
    name: "김해건",
    date: "2019년 9월 3일",
    contents:
      "답글답니당!",
    likes: 1234,
    comment: 234
  }
];
const CommentList = () => {
    return (
        <>
        {
            borderList.map(info => (<Comment key={info.id} info={info} />))
        }
        </>
    );
};

export default CommentList;