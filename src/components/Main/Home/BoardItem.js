import React from 'react';
import { BoardItemWrapper, ProfileBlock, ShareBoardWrapper, adjustHeight } from './styles';
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

const BoardItem = () => {
    return (
        <>
            <BoardItemWrapper>
                <ProfileBlock>
                    <img src={ProfileImage} alt="프로필 이미지" />
                </ProfileBlock>
                <ShareBoardWrapper>
                    <textarea onKeyUp={adjustHeight} placeholder="자신의 일을 공유해보세요"/>
                    <div>
                        <label htmlFor="upload_image"><img src={Image} alt="이미지" /></label>
                        <input type="file" id="upload_image" />
                        <button>게시</button>
                    </div>
                </ShareBoardWrapper>
            </BoardItemWrapper>
            {
                borderList.map(info =>
                    (
                        <BoardItemWrapper>
                            <ProfileBlock>
                                <img src={ProfileImage} alt="프로필 이미지" />
                            </ProfileBlock>
                            <BoardContent key={info.key} info={info} />
                        </BoardItemWrapper>
                    )
                )
            }
        </>
    );
};

export default BoardItem;