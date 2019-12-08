import React from 'react';
import More from '../../../img/Main/More.png';
import { ViewMoreBlock } from './styles';
const ViewMore = () => {
    return (
        <ViewMoreBlock>
            <header>
                <h1>더보기</h1>
            </header>
            <ul>
                <li>
                    <h2>사이트 소개</h2>
                    <img src={More} alt="더보기" />
                </li>
                <div>이 사이트는 엔트리 인턴의 토이 프로젝트로써 
                Team 3, 4의 결과물입니다.

                트위터를 모티브로 제작되었으며 개발 기간은
                약 1개월 2주 정도로 순조롭게 진행되었습니다.
                </div>
                <li>
                    <h2>개발자 소개</h2>
                    <img src={More} alt="더보기" />
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
                    <img src={More} alt="더보기" />
                </li>
                <div>이 사이트는 엔트리 인턴의 토이 프로젝트로써
                Team 3, 4의 결과물입니다.

                트위터를 모티브로 제작되었으며 개발 기간은
                약 1개월 2주 정도로 순조롭게 진행되었습니다.
                </div>
                <li>
                    <h2>더 멋진 기능</h2>
                    <img src={More} alt="더보기" />
                </li>
                <div>이 사이트는 엔트리 인턴의 토이 프로젝트로써
                Team 3, 4의 결과물입니다.

                트위터를 모티브로 제작되었으며 개발 기간은
                약 1개월 2주 정도로 순조롭게 진행되었습니다.
                </div>
            </ul>
        </ViewMoreBlock>
    );
};

export default ViewMore;