import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
background:#2b2c2f;
height: 80px;
/* margin-top: -80px; */
display:flex;
justify-content: center;
align-items:center;
font-size: 1rem;
position:sticky;
top:0;
z-index:10;
font-family: "Amatic SC", cursive;
@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(Link)`
color: #db717d;
justify-self:flex-start;
cursor: pointer;
font-size:3rem;
display:flex;
align-items: center;
margin-left: -32px;
font-weight: bold;
text-decoration:none;
&:hover {
        color:	#c56b89;
        transition : all 0.2s ease-in-out;
    }
`

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px){
    
    display:block;
    position: absolute;
    top: 7px;
    right: 40px;
    transform: translate(100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color:#db717d;
    box-shadow: transparent 1.95px 1.95px 2.6px;;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: 40px;
@media screen and (max-width: 768px){
    display:none;
}
`
export const NavItem = styled.li`
height: 80px;
`
export const NavLinks = styled(Link)`
color: #db717d;
display:flex;
font-size: 2rem;
align-items:center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor:pointer;
&:hover {
        color:	#c56b89;
        transition : all 0.2s ease-in-out;
        border-bottom: 3px solid #c56b89;
    }
`
