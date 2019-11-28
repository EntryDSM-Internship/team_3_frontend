import React from 'react';
import styled from 'styled-components';

const Success = () => {
    const SuccessBlock = styled.div`
        width: 100%;
        height: auto !important;
        flex: 1 !important;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 !important;
        margin-bottom: 141.7px !important;
        border: none !important;    
        box-sizing: border-box;
        outline: none;
        background-color: transparent !important;
        > img {
            width: 230.2px;
            height: 233.3px;
            margin-top: 32px;
        }
    `;
    return (
        <>
            <div className="account-info">
                <h3>축하합니다</h3>
                <h5>이제부터 스퀴커를 이용하실 수 있습니다.</h5>
                <SuccessBlock>
                    <img src={require("../../img/SignUp/Success.png")} alt="폭죽이미지" />
                </SuccessBlock>
            </div>
        </>
    );
};

export default Success;