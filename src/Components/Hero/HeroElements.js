import styled from "styled-components";
import {Link as LinkScroll} from 'react-scroll';

export const HomeSection = styled.div`
background-color:#2b2c2f;
width: 100%;
display: flex;
z-index:-1;
height:90vh;
@media screen and  (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100%;
    }
`

export const HomeIntro = styled.div`
width:50%;
display: flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
margin-left: 150px;
margin-right:20px;
color: #db717d;
font-family: "Amatic SC", cursive;
z-index: 1;
flex: 1;
`

export const HomeImage = styled.div`
width: 50%;
z-index:1;
flex:1;
justify-content:center;
align-items:center;
margin-left:50px;
`

export const ProfileImage = styled.img `
margin-top: 120px ;
margin-bottom:70px;
min-height: 300px;
min-width:300px;
height:350px;

`

export const Heading = styled.h2 `

` 

export const TitleOne = styled.div `
animation-name: moveRight;
animation-duration:0.7s;
font-size:5rem;
`

export const TitleTwo = styled.div `
animation-name: moveLeft; 
 animation-duration:1s;
 color: #ffffff;
 font-size:4rem;

`

export const TitleThree = styled.div `
animation-name: moveRight; */
animation-duration:1.3s;
color: #db717d;
margin-bottom:10px;
font-size:3rem;

`

export const Text = styled.div `
font-size:40px;
color: #ffffff;
margin-bottom:20px;
`

export const ButtonLink = styled(LinkScroll)`

`