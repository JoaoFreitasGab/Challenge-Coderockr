import React, {useState} from 'react'
import { SidebarContainer,
         Icon,
         CloseIcon,
         SidebarWrapper,
         SidebarMenu,
         SidebarLink,
         SideBtnWrap,
 
        } from './SidebarElements' 
import Form from '../Form'
import Popup from '../Popup'


const Sidebar = ({isOpen,toggle}) => {

   
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="posts">
                       Posts
                    </SidebarLink>
                    <SidebarLink onClick={()=> setButtonPopup(true)} >Contact</SidebarLink>
                   
                    <Popup trigger={buttonPopup} setTrigger = {setButtonPopup }>
                     <Form />   
                    </Popup>
                   
                </SidebarMenu>
               <SideBtnWrap>
                   
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
