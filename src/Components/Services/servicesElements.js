import styled from 'styled-components'

export const ServicesContainer = styled.div`
height: 1000px;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
background: #2b2c2f;
font-family: "Amatic SC", cursive;

@media screen and (max-width: 768px) {
    height: 1400px;
}
@media screen and (max-width: 480px) {
    height: 1600px;
}
`

export const ServicesWrapper = styled.div `
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr ;
}
@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding:0;
}
`

export const ServicesCard = styled.div `
background: #2b2c2f;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
height : 340px;
padding : 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
&:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const ServicesIcon = styled.img `
height: 160px;
width: 160px;
margin-bottom: 10px;
`

export const ServicesHeading = styled.h1 `
font-size : 4rem;
color: #db717d;
margin: 30px;
@media screen and (max-width: 480px){
    font-size: 2rem;
}
`
export const ServicesSecondHeader = styled.h2 `
    font-size: 1.5rem;
    margin-bottom: 10px;
    color:#db717d;
`

export const ServicesParagraph = styled.p `
    font-size: 1.2rem;
    text-align: center;
    color:#fff;
`