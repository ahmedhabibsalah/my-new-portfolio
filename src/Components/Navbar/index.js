import React from 'react'
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import {FaBars} from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo  to="/">Ahmed Habib</NavLogo>
                    <MobileIcon onClick={toggle}>
                      <FaBars />
                    </MobileIcon>
                    <NavMenu>
                      <NavItem>
                        <NavLinks to='/projects'>Projects</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to='/services'>Services</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to='/contact'>Contact</NavLinks>
                      </NavItem>                                         
                    </NavMenu>                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
