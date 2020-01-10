import React, { useEffect, useState } from 'react';
import { ContentsWrapper } from './styles';
import Image1 from "../../../img/Main/PostImage1.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Like from '../../../img/Main/Like.png';
import onLike from '../../../img/Main/onLike.png';


const BoardContent = ({ token, info }) => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    axios({
      url: `http://13.125.249.23/user/${info.userId}`,
      method: 'get',
      headers: {
        'Authorization': token.access_token,
      }
    }).then(res => {
      setUserName(res.data.user.username);
    }).catch(err => {
    });
  }, []);
  const date = new Date(info.createdAt);
  const deleteBoard = () => {
    if (window.confirm('정말 게시글을 지우시겠습니까?'))
      axios({
        url: `http://13.125.249.23/post/${info.id}`,
        method: 'delete',
        headers: {
          'Authorization': token.access_token,
        }
      }).then(res => {
        window.location.reload();
      }).catch(err => {
      })
  }

  const likeBoard = () => {
    axios({
      url: `http://13.125.249.23/post/${info.id}/like`,
      method: `${info.isLike ? 'delete' : 'post'}`,
      headers: {
        'Authorization': token.access_token,
      }
    }).then(res => {
      window.location.reload();
    }).catch(err => {
    })
  }
    return (
      <ContentsWrapper>
        <header>
          <span className="name">{userName}</span>
          <span className="date">{`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`}</span>
        </header>
        <Link to={`/post?id=${info.id}`}>
        <main>
{
  info.content !== undefined && info.content.indexOf('\n') !== -1 && info.content.split('\n').map(info => {
  return <>{info}<br /></>;
  })
}
{
    info.content !== undefined && info.content.indexOf('\n') === -1 && <>{info.content}</>
}
          <div>
            {
            Array.isArray(info.postImgs) && info.postImgs.map((img, key) => {
              if (key <= 1)
              return <img key={img.id} src={`http://13.125.249.23/postimgs/${img.name}`} alt="사진1" />;
            }
            )
          }
          </div>
          <div>
            {
              Array.isArray(info.postImgs) && info.postImgs.map((img, key) => {
                if (key >= 2)
                  return <img key={img.id} src={`http://13.125.249.23/postimgs/${img.name}`} alt="사진1" />;
              }
              )
            }
          </div>
        </main>
        </Link>
        <footer>
          <div>
            <button className="like" onClick={likeBoard}><img src={info.isLike ? onLike : Like} /></button>
            <span>{info.like}</span>
          </div>
          <div>
            <Link to={`/post?id=${info.id}`}>
            <button className="comment"></button>
            </Link>
            <span>{info.comments}</span>
          </div>
          <div>
            {
              info.deletable ? <button className="delete" onClick={deleteBoard} /> : ''
            }
          </div>
        </footer>
      </ContentsWrapper>
    );
};

export default BoardContent;