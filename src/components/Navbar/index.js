import React, {useState} from 'react'
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
import Form from '../Form'
import Popup from '../Popup'



        const Navbar = ({toggle}) => {
            const [buttonPopup, setButtonPopup] = useState(false);
         
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
                            <NavLinks onClick={() => setButtonPopup(true)}>Contact</NavLinks> 
                               <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
                               <Form />   
                                </Popup>

                  
                         
                         
                        </NavItem>
                       
                    </NavMenu>
                
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
