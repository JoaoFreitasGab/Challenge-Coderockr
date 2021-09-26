import React from 'react'
import { SidebarContainer,
         Icon,
         CloseIcon,
         SidebarWrapper,
         SidebarMenu,
         SidebarLink,
         SideBtnWrap,
         SidebarRoute
        } from './SidebarElements' 

const Sidebar = ({isOpen,toggle}) => {
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
                    <SidebarLink onClick={toggle} to="contact">
                        Contact
                    </SidebarLink>
                   
                </SidebarMenu>
               <SideBtnWrap>
                    {/* <SidebarRoute to='/'>
                        Sign In
                    </SidebarRoute> */}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
