import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import CloseButton from '../../../img/Profile/CloseButton.png';
import UserItem from './UserItem';
import axios from 'axios';
const FollowerList = ({ userId, setUserId, token, modalOn, setModalOn }) => {
    const [followers, setFollowers] = useState([]);
    
    useEffect(() => {
        if (userId !== undefined)
            axios({
                url: `http://13.125.249.23/user/${userId}/followers`,
                method: 'get',
                headers: {
                    'Authorization': token.access_token,
                }
            }).then(res => {
                setFollowers(res.data.followers);
            }).catch(err => {
                localStorage.clear();
                window.location.reload();
            })
    }, [userId]);
    return (
        modalOn.Follower ?
        <>
            <S.Background onClick={() => setModalOn({ ...modalOn, Follower: !modalOn.Follower })} />
            <S.FollowerWrapper>
                <header>
                    <div>
                        <span>팔로워</span>
                        <img src={CloseButton} alt="종료" onClick={() => setModalOn({ ...modalOn, Follower: !modalOn.Follower })} />
                    </div>
                </header>
                <main>
                    {
                        followers.map(info => (
                            <UserItem setUserId={setUserId} key={info.id} info={info} />
                        ))
                    }
                </main>
            </S.FollowerWrapper>
        </>
        : null  
    );
};

export default FollowerList;