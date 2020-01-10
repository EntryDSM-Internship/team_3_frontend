import React from 'react';
import * as S from './styles';
import CloseButton from '../../../img/Main/CloseButton.png';
const PreviewImage = ({ setImgFormData, images, setImages }) => {
    const onRemove = (e) => {
        let index = e.target.parentNode.parentNode.getAttribute('index');
        setImgFormData((state) => { return [...state].filter((v, i) => {
            console.log(i, index, i.toString() !== index);
            return i.toString() !== index;
        }) });
        setImages((state) => { return [...state].filter((v, i) => {
            return i.toString() !== index;
        } ) });
    }
    return (
        <S.PreviewImageWrapper>
            {
                images.map((src, index) => {
                    console.log(index);
                    return (<div index={index} key={index}>
                        <img src={src} alt="미리보기" />
                        <button onClick={onRemove}><img src={CloseButton} alt="닫기 이미지" /></button>
                </div>);
                })
            }
        </S.PreviewImageWrapper>
    );
};

export default PreviewImage;