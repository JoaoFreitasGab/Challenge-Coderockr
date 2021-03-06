import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'



export const Nav = styled.nav`
    margin-top: -10px;
    font-family: 'Roboto', sans-serif;
    background: #2d2d2d;
    height: 100px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 9px;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`       

    export const NavLogo =  styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.3rem;
    display: flex;
    align-items: center;
    margin-left: 70px;
    font-weight: bold;
    text-decoration: none;
    `;

    export const MobileIcon = styled.div`
     margin-top: 13px;
        display: none;
        
        @media screen and (max-width: 768px){
            display:block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;
            color: #fff;
        }
    `

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display:none;
    }


`

export const NavItem = styled.li`
    height: 80px;
    padding-right: 70px;
`

export const NavLinks = styled(LinkS)`
    font-family: 'Roboto', sans-serif;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.7rem;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
    &:hover{
        color: #ef9f0a;
        transition: 0.2s ease-in-out;

    }

`




