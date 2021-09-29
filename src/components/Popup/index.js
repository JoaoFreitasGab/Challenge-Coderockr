import React from 'react'
import {PopupContainer,
    Icon,
    CloseIcon
    } from './PopupElements'




function Popup(props){
    return (props.trigger) ? (
        <PopupContainer>
            <Icon>
            <CloseIcon onClick={() => props.setTrigger(false)} />
            {props.children}
            </Icon>
        </PopupContainer>
      
    ) : "";
}

export default Popup
