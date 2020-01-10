import React, { useState, useRef } from 'react';
import * as S from './Styles';
import CloseButton from '../../../img/Profile/CloseButton.png';
import * as C from '../../Common/Common';
import AddImage from '../../../img/SignUp/Add.png';
import axios from 'axios';
const UpdateProfile = ({ token, modalOn, setModalOn }) => {
    const [profileInfo, setProfileInfo] = useState({
        username: '',
        introduction: '',
        profileImg: ''
    });
    const [errorMessage, setErrorMessage] = useState({

    });
    const onChange = (e) => {
        console.log(e.target);
        const keyName = '';
        profileInfo[keyName + e.target.id] = e.target.value;
        setProfileInfo({
            ...profileInfo,
        });
    }
    
    const label = useRef();
    const [profileImg, setProfileImg] = useState();
    const imgChange = () => {
            let frm = new FormData();
            let photoFile = document.getElementById("upload-profile");
            frm.append("profileImg", photoFile.files[0]);
            let fileList = photoFile.files;
            let reader = new FileReader();
            reader.readAsDataURL(fileList[0]);
            reader.onload = () => {
                label.current.style.backgroundImage = `url(${reader.result})`;
            }
            setProfileImg(frm);
            setProfileInfo({
                ...profileInfo,
                profileImg: frm
            });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const img = new FormData();
        img.append('profileImg', profileInfo.profileImg.get('profileImg'));
        axios({
            method: 'patch',
            url: 'http://13.125.249.23/user/img',
            headers: {
                'Authorization': token.access_token,
                'Content-Type': 'multipart/form-data'
            },
            data: img
        }).then(res => {
            setModalOn({ ...modalOn, UpdateProfile: !modalOn.UpdateProfile });
            window.location.reload();
        }).catch(err => {
        })
        if (profileInfo.username === '') {
            setErrorMessage({ ...errorMessage, username: '이름은 공백일수 없습니다.' });
            return;
        }
        axios({
            method: 'patch',
            url: 'http://13.125.249.23/user',
            headers: {
                'Authorization': token.access_token,
            },
            data: {
                username: profileInfo.username,
                introduction: profileInfo.introduction
            }
        }).then(res => {
            setModalOn({ ...modalOn, UpdateProfile: !modalOn.UpdateProfile });
            window.location.reload();
        }).catch(err => {
        })
    }
    return (
        modalOn.UpdateProfile ?
        <> 
            <S.Background onClick={() => setModalOn({...modalOn, UpdateProfile: !UpdateProfile})} />
                <S.UpdateProfileWrapper>
                    <header>
                        <div>
                            <img src={CloseButton} alt="종료" onClick={() => setModalOn({ ...modalOn, UpdateProfile: !modalOn.UpdateProfile })} />
                            <span>프로필 수정</span>
                        </div>
                        <button onClick={onSubmit} >저장</button>
                    </header>
                    <main>
                        <header/>
                        <div className="profile_image">
                            <label htmlFor="upload-profile" ref={label}><img src={AddImage} alt="추가버튼" /></label>
                            <input type="file" id="upload-profile" onChange={imgChange} />
                        </div>
                        <C.InputWrapper>
                            <label htmlFor="username">이름</label>
                                <input onChange={onChange} type="text" maxLength="12" id="username" />
                        </C.InputWrapper>
                        <div className="sentence-state">
                            <span>{errorMessage.username}</span>
                            <p>
                                <span>{profileInfo.username.length}</span>
                                <span>/12</span>
                            </p>
                        </div>
                        <C.InputWrapper>
                            <label htmlFor="introduction">한 줄 소개</label>
                            <form onSubmit={onSubmit}>
                                <input
                                    maxLength="60"
                                    type="text"
                                    id="introduction"
                                    onChange={onChange}
                                />
                            </form>
                        </C.InputWrapper>
                        <div className="sentence-state">
                            <span>{errorMessage.introduction}</span>
                            <p>
                                <span>{profileInfo.introduction.length}</span>
                                <span>/60</span>
                            </p>
                        </div>
                    </main>
                </S.UpdateProfileWrapper>
        </>
        : null  
    );
};

export default UpdateProfile;