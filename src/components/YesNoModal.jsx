import React from 'react';
import styled from 'styled-components/macro';

import closeIcon from 'imgs/close_icon.svg';

const ModalOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000050;
    z-index: 5;
    color: #FFF;
`;

const ModalContainer = styled.div`
    width: 80%;
    max-width: 500px;
    height: 300px;
    background-color: #534C85;
    border-radius: 5px;
    border: 1px solid #fff;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.25);
    padding: 16px;
    box-sizing: border-box;
    position: relative;
`;

const TextContainer = styled.div`
    font-size: 18px;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 48px;
`;

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items: center;
    align-items: end;
    padding: 48px;
    padding-bottom: 62px;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
`;

const Button = styled.button`
    cursor: pointer;
    width: 60%;
    height: 40px;
    font-size: 16px;
    border-radius: 5px;
`;

const CloseButton = styled.img`
    position: absolute;
    cursor: pointer;
    padding: 16px;
    right: 0;
    top: 0;
`;

export default function YesNoModal(props) {

    return (
        <ModalOverlay>
            <ModalContainer>
                <TextContainer>{props.text || 'Default text. Please replace with your own message'}</TextContainer>
                <ButtonContainer>
                    <Button onClick={props.yes}>Yes</Button>
                    <Button onClick={props.no}>No</Button>
                </ButtonContainer>
            <CloseButton onClick={props.no} src={closeIcon} alt={'close icon'} />
            </ModalContainer>
        </ModalOverlay>
    )
}
