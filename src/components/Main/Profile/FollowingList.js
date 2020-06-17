import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import CloseButton from '../../../img/Profile/CloseButton.png';
import UserItem from './UserItem';
import axios from 'axios';
const FollowingList = ({ userId, setUserId, token, modalOn, setModalOn }) => {
    const [following, setFollowing] = useState([]);
    useEffect(() => {
        if (userId !== undefined)
            axios({
                url: `http://13.125.249.23/user/${userId}/followings`,
                method: 'get',
                headers: {
                    'Authorization': token.access_token,
                }
            }).then(res => {
                setFollowing(res.data.followings);
            }).catch(err => {
                localStorage.clear();
                window.location.reload();
            })
    }, [userId]);
    return (
        modalOn.Following ?
            <>
                <S.Background onClick={() => setModalOn({ ...modalOn, Following: !modalOn.Following })} />
                <S.FollowerWrapper>
                    <header>
                        <div>
                            <span>팔로잉</span>
                            <img src={CloseButton} alt="종료" onClick={() => setModalOn({ ...modalOn, Following: !modalOn.Following })} />
                        </div>
                    </header>
                    <main>
                        {
                            following.map(info => (
                                <UserItem setUserId={setUserId} key={info.id} info={info} />
                            ))
                        }
                    </main>
                </S.FollowerWrapper>
            </>
            : null
    );
};

export default FollowingList;