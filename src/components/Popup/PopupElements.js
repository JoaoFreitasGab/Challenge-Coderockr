import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa'

export const PopupContainer = styled.div`
    position: fixed;
    top: 15px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: auto;

    @media screen and (max-width: 768px) {
       top: 15px;
       
    }

    @media screen and (max-width: 480px){
       display: flex;
    }

`  


export const CloseIcon = styled(FaTimes) `
    position: absolute;
    top: 2%;
    right: 3%;
    font-size: 1.5rem;
    z-index: 1;
    color: #000;
    cursor: pointer;
`

export const Icon  = styled.div`
    position: relative;
    padding: 30px;
    width: 100%;
    max-width: 640px;
    background-color: #fff;
`