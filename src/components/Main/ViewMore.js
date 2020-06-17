import React from 'react';
import More from '../../img/Main/More.png';
import { SideWrapper, ViewMoreBlock } from './styles';
import CloseView from '../../img/Main/CloseView.png';
import CopyRight from '../../img/Main/CopyRight.png';
import axios from 'axios';

const ViewMore = ({ history, token, myInfo }) => {
    window.onload = () => {
        const drag_button = document.querySelector('#switch_circle');
        let x = 0;
        const background = document.querySelector('#switch_background');
        drag_button.addEventListener('click', e => {});
        drag_button.addEventListener('mousedown', e => {
            x = e.clientX;
            function switchDrag(e) {
                drag_button.style.transform = `translateX(${e.clientX - x}px)`;
            }
            drag_button.addEventListener('mousemove', switchDrag);
            drag_button.addEventListener('mouseup', e => {
                drag_button.removeEventListener('mousemove', switchDrag, true);
            })
        });
    }
    const onClick = (e) => {
        if (e.target.src !== CloseView) {
            e.target.previousSibling.style.color = "#505bda";
            e.target.parentNode.nextSibling.style.display = 'block';
            e.target.src = CloseView;
        } else {
            e.target.previousSibling.style.color = "#000000";
            e.target.parentNode.nextSibling.style.display = 'none';
            e.target.src = More;
        }   
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

    const onPrivate = () => {
        axios({
            method: 'patch',
            url: 'http://13.125.249.23/user/private',
            headers: {
                "Authorization": token.access_token,
            },
            data: {
                private: !myInfo.private   
            }
        }).then(res => {
            if (myInfo.private)
                alert('공개 계정으로 전환성공하였습니다.');
            else
                alert('비공개 계정으로 전환 성공하였습니다.');
        }).catch(err => {
            alert('다시 로그인하여 주세요.');
            localStorage.clear();
        })
    }
    
    return (
        <SideWrapper>
            <ViewMoreBlock>
                <header>
                    <h1>더보기</h1>
                </header>
                <ul>
                    <li>
                        <h2>사이트 소개</h2>
                        <img src={More} onClick={onClick} className="more-button" alt="더보기" />
                    </li>
                    <div>이 사이트는 엔트리 인턴의 토이 프로젝트로써 
                    Team 3, 4의 결과물입니다.
                    <br/><br/>
                    트위터를 모티브로 제작되었으며 개발 기간은
                    약 1개월 2주 정도로 순조롭게 진행되었습니다.
                    </div>
                    <li>
                        <h2>개발자 소개</h2>
                        <img src={More} onClick={onClick} className="more-button" alt="더보기" />
                    </li>
                    <div>
                        Team 3 <br/>
                        이우찬: Front - End<br />
                        김대웅: Back - End<br /><br />
                        Team 4 <br/>
                        최이삭: Front - End<br />
                        임용성: Back - End<br /><br />
                        김해건: Design<br />
                    </div>
                    <li>
                        <h2>계정 설정</h2>
                        <img src={More} onClick={onClick} className="more-button" alt="더보기" />
                    </li>
                    <div>
                        <h2>계정 비활성화</h2>
                        <div id="switch_background" className="off" >
                            <div id="switch_circle" />
                        </div>
                        <div>
                            계정을 비활성화 시 자신의 프로필을 비공개 <br/>
                            상태로 바꾸며 다른 사람에게 자신의 활동이 <br/>
                            보이지 않습니다.
                        </div>
                        <button onClick={LogOut}>로그아웃</button>
                        <button onClick={onPrivate}>계정 비활성화</button>
                    </div>
                    <li>
                        <h2>더 멋진 기능(개발중)</h2>
                        <img src={More} onClick={onClick} className="more-button" alt="더보기" />
                    </li>
                    <div>
                        <h2>다크 모드</h2>
                        <div>
                            요즘 다크모드는 필수죠? <br/>
                            저희 사이트는 다크모드를 지워합니다. <br/> <br/>
                            다크모드로 더 멋진 스퀴커를 만나보세요!!
                        </div>
                    </div>
                </ul>
            </ViewMoreBlock>
            <img src={CopyRight} alt="저작권" />
        </SideWrapper>
    );
};

export default ViewMore;