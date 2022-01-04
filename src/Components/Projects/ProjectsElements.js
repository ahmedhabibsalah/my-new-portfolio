import styled from "styled-components";

export const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #2b2c2f;
font-family: "Amatic SC", cursive;

`
export const Heading= styled.h1`
font-size:4rem;
margin:30px;
color:#db717d;
`
export const Card = styled.div `
  max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr ;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr  ;
}
@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding:0;
}
`
export const Box = styled.div `
box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);transition: all 0.2s ease-in-out;
    margin:30px;
`


export const Content = styled.div`
background:#2b2c2f;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;
max-height : 580px;
padding : 30px;
overflow: hidden;
&:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    transform: translateY(-50px);
}

`

export const Img = styled.img`
height:20rem;
width: 30rem;
margin-bottom: 10px;
`

export const Title = styled.h2 `
   font-size: 1.5rem;
    margin-bottom: 10px;
    color:#db717d;
`
export const Description = styled.p `
 font-size: 1.5rem;
    text-align: center;
    color:#fff;
`