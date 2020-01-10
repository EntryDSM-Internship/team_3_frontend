import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BoardList from "../Home/BoardList";
import * as S from './Styles.js';
import * as H from '../Home/styles';
import ProfileImage from '../../../img/Main/ProfileImage.png';
import UpdateProfile from './UpdateProfile';
import FollowerList from './FollowerList';
import FollowingList from './FollowingList';

const Profile = ({ myInfo, userId, setUserId, pathName, token }) => {
    const [profile, setProfile] = useState({
        'email': null,
        'followers': [],
        'followings': [],
        'id': null,
        'introduction': null,
        'me': null,
        'private': null,
        'profileImg': ProfileImage,
        'username': null,
    });
    const [modalOn, setModalOn] = useState({
        UpdateProfile: false,
        Follower: false,
        Following: false
    });
    const [isFollowing, setIsFollowing] = useState(false);
    const [onPrivate, setOnPrivate] = useState(false);
    const [page, setPage] = useState(0);
    const [boardList, setBoardList] = useState([]);
    const [isMine, setIsMine] = useState(false);
    const scrollBody = useRef();
    const [loading, setLoading] = useState(true);

    setUserId(pathName.split('/')[2]);
    useEffect(() => {
        setPage(0);
        setBoardList([]);
        if (userId !== undefined) {
            axios({
                url: `http://13.125.249.23/user/${userId}`,
                method: 'get',
                headers: {
                    'Authorization': token.access_token,
                }
            }).then(res => {
                setOnPrivate(res.data.user.private);
                setIsFollowing(res.data.user.isFollow);
                setProfile({
                    'email': res.data.user.email,
                    'followers': res.data.user.followers,
                    'followings': res.data.user.followings,
                    'id': res.data.user.id,
                    'introduction': res.data.user.introduction,
                    'me': res.data.user.me,
                    'private': res.data.user.private,
                    'profileImg': `http://13.125.249.23/profileimgs/${res.data.user.profileImg}`,
                    'username': res.data.user.username,
                });
                setIsMine(res.data.user.me);
            }).catch(err => {
                localStorage.clear();
            });
            
            if (!onPrivate) {
                axios({
                    url: `http://13.125.249.23/user/${userId}/posts/${page}`,
                    method: 'get',
                    headers: {
                        'Authorization': token.access_token,
                    }
                }).then(res => {
                    setBoardList(boardList.concat(res.data.posts));
                    setLoading(true);
                }).catch(err => {
                    localStorage.clear();
                });
            }
        }
    }, [userId]);
    useEffect(() => {
        setBoardList([]);
        if (userId !== undefined && (isMine || (!onPrivate))) 
            axios({
                url: `http://13.125.249.23/user/${userId}/posts/${page}`,
                method: 'get',
                headers: {
                    'Authorization': token.access_token,
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
    const onFollow = (e) => {
        console.log(e.target.innerText);
        axios({
            url: `http://13.125.249.23/follow/${userId}`,
            method: `${e.target.innerText === '팔로우' ? 'post' : 'delete'}`,
            headers: {
                'Authorization': token.access_token,
            }
        }).then(res => {
            window.location.reload();
        }).catch(err => {
        })  
    }
    const LogOut = () => {
        axios({
            method: 'delete',
            url: 'http://13.125.249.23/auth/logout',
            headers: {
                "Authorization": token.access_token,
                "X-refresh-token": token.refresh_token
            }
        }).then(res => {
            alert('로그아웃 성공');
            localStorage.clear();
            window.location.reload();
        }).catch(err => {
        })
    };
    return (
        <>
            <S.MainWrapper>
                <S.ProfileWrapper>
                    <header>
                    </header>
                    <div>
                        <img src={profile.profileImg} alt="프로필" />
                    </div>
                    <main>
                        <div>
                            {console.log(typeof profile.followers)}
                            <span>{profile.username}</span>
                            <p className="email">{profile.email}</p>
                            <p>{profile.introduction}</p>
                            <div>
                                <p onClick={() => setModalOn({ ...modalOn, Following: !modalOn.Following })}>팔로잉<span>{profile.followings.length}</span></p>
                                <p onClick={() => setModalOn({ ...modalOn, Follower: !modalOn.Follower })}>팔로워<span>{profile.followers.length}</span></p>
                            </div>
                        </div>
                        <aside>
                            { 
                                isMine ? <>
                                    <button onClick={() => setModalOn({ ...modalOn, UpdateProfile: !modalOn.UpdateProfile })}>프로필 수정</button>
                                    <button onClick={LogOut}>로그아웃</button>
                                    </>
                                    : isFollowing ? <button onClick={onFollow} className="following">팔로잉</button>
                                    : <button onClick={onFollow} className="follow">팔로우</button>
                            }
                            
                            
                        </aside>
                    </main>
                    <footer><span>{isMine ? '내 게시물' : (onPrivate ? '비공개 계정' : '게시물')}</span></footer>
                </S.ProfileWrapper>
                <H.BoardWrapper ref={scrollBody}>
                    <BoardList myInfo={myInfo} isMine={isMine} boardList={boardList} token={token} />
                </H.BoardWrapper>
            </S.MainWrapper>
            <UpdateProfile token={token} modalOn={modalOn} setModalOn={setModalOn} />
            <FollowerList userId={userId} setUserId={setUserId} token={token} modalOn={modalOn} setModalOn={setModalOn} />
            <FollowingList userId={userId} setUserId={setUserId} token={token} modalOn={modalOn} setModalOn={setModalOn} />
        </>
    );
};

export default Profile;