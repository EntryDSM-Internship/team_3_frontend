import React, { useRef } from 'react';
import styled from 'styled-components';
import img from '../../img/SignUp/profileImage.png';

const ProfileImage = ({ info, setInfo }) => {
    const label = useRef();
    const onChange = (e) => {
      let frm = new FormData();
      let photoFile = document.getElementById("upload-profile");
      frm.append("profileImg", photoFile.files[0]);
        let fileList = photoFile.files;
        let reader = new FileReader();
        reader.readAsDataURL(fileList[0]);
        reader.onload = () => {
          label.current.style.backgroundImage = `url(${reader.result})`;
        }
        setInfo({
            ...info,
            profileImg: frm
          });
      }
    const Profile = styled.div`
        .profile {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 0;
            padding-top: 0;
            margin-bottom: 171px;
            border: none;    
            box-sizing: border-box;
            outline: none;
            background-color: transparent;
            > label {
                width: 175px;
                height: 175px;
                cursor: pointer;
                background-image: url(${img});
                background-size: cover;
                border-radius: 50%;
                img {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -95%);
                }
            }
            input {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0,0,0,0);
                border: 0;
            }
        }
    `;
    return (
      <>
        <Profile>
          <h3>프로필 사진을 등록하세요.</h3>
          <h5>프로필에 표시할 사진을 등록하세요.</h5>
          <div className="profile">
            <label htmlFor="upload-profile" ref={label}><img src={require('../../img/SignUp/Add.png')} alt="추가버튼" / ></label>
              <input type="file" id="upload-profile" onChange={onChange} />
          </div>
        </Profile>
      </>
    );
};

export default ProfileImage;