import React from 'react';
import More from '../../img/Main/More.png';
import { SideWrapper, ViewMoreBlock } from './styles';
import CloseView from '../../img/Main/CloseView.png';
import CopyRight from '../../img/Main/CopyRight.png';

const ViewMore = () => {
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

                    트위터를 모티브로 제작되었으며 개발 기간은
                    약 1개월 2주 정도로 순조롭게 진행되었습니다.
                    </div>
                    <li>
                        <h2>개발자 소개</h2>
                        <img src={More} onClick={onClick} className="more-button" alt="더보기" />
                    </li>
                    <div>
                        Team 3
                        이우찬: Front - End
                        임용성: Back - End
                        Team 4
                        최이삭: Front - End
                        김대웅: Back - End
                        김해건: Design
                    </div>
                    <li>
                        <h2>계정 설정</h2>
                        <img src={More} onClick={onClick} className="more-button" alt="더보기" />
                    </li>
                    <div>이 사이트는 엔트리 인턴의 토이 프로젝트로써
                    Team 3, 4의 결과물입니다.

                    트위터를 모티브로 제작되었으며 개발 기간은
                    약 1개월 2주 정도로 순조롭게 진행되었습니다.
                    </div>
                    <li>
                        <h2>더 멋진 기능</h2>
                        <img src={More} onClick={onClick} className="more-button" alt="더보기" />
                    </li>
                    <div>이 사이트는 엔트리 인턴의 토이 프로젝트로써
                    Team 3, 4의 결과물입니다.

                    트위터를 모티브로 제작되었으며 개발 기간은
                    약 1개월 2주 정도로 순조롭게 진행되었습니다.
                    </div>
                </ul>
            </ViewMoreBlock>
            <img src={CopyRight} alt="저작권" />
        </SideWrapper>
    );
};

export default ViewMore;