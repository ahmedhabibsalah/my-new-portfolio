import styled from "styled-components";
import {Link as LinkScroll} from 'react-scroll';


export const Main = styled.main `
position: relative;
background:#2b2c2f;
z-index:1;
`

export const Container = styled.div `
padding: 2rem;
width: 100%;
margin-left: auto;
margin-right: auto;
position: relative;
background:#2b2c2f;

`

export const Section = styled.section `
border-radius: 0.5rem;
box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
padding: 5rem;
`
export const Img = styled.img `
border-radius: 0.25rem;
width:100%;
height:100%;
margin-right:2rem;
`
export const TextWrapper = styled.div `
font-size: 1.125rem;
line-height: 1.75rem;
display: flex;
flex-direction: column;
justify-content: center;
`
export const Heading= styled.h1`
font-family: "Amatic SC", cursive;
font-size: 3.75rem;
line-height: 1;
color:#db717d;
margin-bottom: 1rem;
`
export const Author = styled.span `
color:#c56b89;
`
export const Bio = styled.p `
color: #ffffff;
font-size: 1.125rem;
line-height: 1.75rem;
`

export const Wrapper = styled(LinkScroll)`
    height: 60px;
    width: 60px;
    align-self: flex-end;
    margin-top: 40px;
    animation:float 3s linear infinite;
@keyframes float{
  0%, 100%{
    transform: translateY(1rem);
  }
  50%{
    transform: translateY(0rem);
  }
}
    color: #db717d;
    cursor: pointer;
`