import React, {useState} from 'react'
import { Modal } from '../Modal/Modal'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
  
} from './NavbarElements'

/* import ModalForm from './component/ModalForm'; */

        const Navbar = ({toggle}) => {
            const [showModal, setShowModal] = useState(false);
            const openModal = () => {
                setShowModal(prev => !prev);
              };
    return (
        <>
            <Nav>
                <NavbarContainer>
                    
                    <NavLogo to="home">Rockr Blog</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="Posts">Posts</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={openModal}>Contact</NavLinks>   
                            <Modal showModal={showModal} setShowModal={setShowModal} />
                         
                        </NavItem>
                       
                    </NavMenu>
                
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
