import React, { useState, useEffect } from "react";
import * as S from "./styles";
import ProfileImage from "../../../img/Main/ProfileImage.png";
import Image from "../../../img/Main/Image.png";
import BoardItem from "./BoardItem";
import axios from "axios";
import PreviewImage from './PreviewImage';
import { Link } from 'react-router-dom';

  
  const BoadrList = ({ myInfo, isMine, boardList, token }) => {
    let frm = new FormData();
  const [postInfo, setPostInfo] = useState({
      formData: frm
  });
  const [images, setImages] = useState([]);
  const [imgFormData, setImgFormData] = useState([]);
  function adjustHeight(e) {
    var textEle = document.querySelector('textarea');
    textEle.style.height = 'auto';
    var textEleHeight = textEle.scrollHeight;
    textEle.style.height = `${textEleHeight - 19}px`;
    postInfo.formData.set('content', textEle.value);
    setPostInfo({ formData: postInfo.formData });
  };
  const onChange = (e) => {
    let photoFile = e.target;
    let fileList = photoFile.files;
    if ((Array.isArray(images) && (images.length + fileList.length) >= 5)) return alert('사진은 4개까지만 허용이됩니다.');
    Object.keys(fileList).forEach(key => {
      let reader = new FileReader();
      reader.readAsDataURL(fileList[key]);
      setImgFormData(state => {
         return [...state].concat(fileList[key]);
      });
      reader.onload = (e) => {
        setImages((state) => { 
            return [...state].concat(e.target.result);
        });
      }
    });
  };

  useEffect(() => {
    postInfo.formData.delete('imgs');
    imgFormData.forEach(data => postInfo.formData.append('imgs', data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgFormData]);

  const onUpload = () => {
    axios({
      method: 'post',
      url: 'http://13.125.249.23/post',
      headers: {
        'Authorization': token.access_token,
        'Content-Type': 'multipart/form-data'
      },
      data: postInfo.formData
    }).then(res => {
      window.location.reload();
    }).catch(err => {
    })
  }
  
    return (
      <>
        <S.BoardItemWrapper>
          {
            isMine ? 
          <><S.ProfileBlock>
                <Link to={`/user/${myInfo.id}`}>
                <img src={myInfo.profileImg === undefined || myInfo === undefined ? ProfileImage : `http://13.125.249.23/profileimgs/${myInfo.profileImg}`} alt="프로필 이미지" />
                </Link>
          </S.ProfileBlock>
          <S.ShareBoardWrapper>
            <textarea
              maxLength="256"
              onKeyUp={adjustHeight}
              placeholder="자신의 일을 공유해보세요"
            />
            <PreviewImage setImgFormData={setImgFormData} images={images} setImages={setImages} />
            <div>
              <label htmlFor="upload_image">
                <img src={Image} alt="이미지" />
              </label>
              <input type="file" multiple id="upload_image" onChange={onChange} />
              <button onClick={onUpload}>게시</button>
            </div>
          </S.ShareBoardWrapper></>
          : ''
          }
        </S.BoardItemWrapper>
        {Object.keys(boardList).length !== 0 && boardList.map(info => {
          return <BoardItem token={token} key={info.id} info={info} />;
        })}
      </>
    );
};

export default BoadrList;