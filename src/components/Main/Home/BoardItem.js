import React from 'react';
import * as S from './styles';
import ProfileImage from '../../../img/Main/ProfileImage.png';
import Image from '../../../img/Main/Image.png';
import BoardContent from './BoardContent';

const borderList = [
    {
        key: "1",
        name: "김해건",
        date: "2019년 9월 3일",
        contents: "그 어느때보다 신기롭다.그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다그 어느때보다 신기롭다",
        likes: 1234,
        comment: 234
    },
    {
        key: "2",
        name: "김해건",
        date: "2019년 9월 3일",
        contents: "그 어느때보다 신기롭다.",
        likes: 1234,
        comment: 234
    },
    {
        key: "3",
        name: "김해건",
        date: "2019년 9월 3일",
        contents: "그 어느때보다 신기롭다.",
        likes: 1234,
        comment: 234
    },
    {
        key: "4",
        name: "김해건",
        date: "2019년 9월 3일",
        contents: "그 어느때보다 신기롭다.",
        likes: 1234,
        comment: 234
    },
    {
        key: "5",
        name: "김해건",
        date: "2019년 9월 3일",
        contents: "그 어느때보다 신기롭다.",
        likes: 1234,
        comment: 234
    },
    {
        key: "6",
        name: "김해건",
        date: "2019년 9월 3일",
        contents: "그 어느때보다 신기롭다.",
        likes: 1234,
        comment: 234
    },
    {
        key: "7",
        name: "김해건",
        date: "2019년 9월 3일",
        contents: "그 어느때보다 신기롭다.",
        likes: 1234,
        comment: 234
    },
    {
        key: "8",
        name: "김해건",
        date: "2019년 9월 3일",
        contents: "그 어느때보다 신기롭다.",
        likes: 1234,
        comment: 234
    },
    
]

function adjustHeight() {
    var textEle = document.querySelector('textarea');
    textEle.style.height = 'auto';
    var textEleHeight = textEle.scrollHeight;
    console.log(textEleHeight);
    textEle.style.height = `${textEleHeight - 19}px`;
};

const BoardItem = () => {
    return (
        <>
            <S.BoardItemWrapper>
                <S.ProfileBlock>
                    <img src={ProfileImage} alt="프로필 이미지" />
                </S.ProfileBlock>
                <S.ShareBoardWrapper>
                    <textarea onKeyUp={adjustHeight} placeholder="자신의 일을 공유해보세요"/>
                    <div>
                        <label htmlFor="upload_image"><img src={Image} alt="이미지" /></label>
                        <input type="file" id="upload_image" />
                        <button>게시</button>
                    </div>
                </S.ShareBoardWrapper>
            </S.BoardItemWrapper>
            {
                borderList.map(info =>
                    (
                        <S.BoardItemWrapper>
                            <S.ProfileBlock>
                                <img src={ProfileImage} alt="프로필 이미지" />
                            </S.ProfileBlock>
                            <BoardContent key={info.key} info={info} />
                        </S.BoardItemWrapper>
                    )
                )
            }
        </>
    );
};

export default BoardItem;