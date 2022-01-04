import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/projects" onClick={toggle}>
                    Projects
                </SidebarLink>
                <SidebarLink to="/services" onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to="/contact" onClick={toggle}>
                    Contact
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
    )
}

export default Sidebar
