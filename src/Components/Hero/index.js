import React, {  useState } from 'react'
import Typewriter from 'typewriter-effect'
import {  ButtonLink, Heading, HomeImage, HomeIntro, HomeSection, ProfileImage, Text, TitleOne, TitleThree, TitleTwo } from './HeroElements'
import About from '../About'
import { Button, ButtonWrapper } from '../../globalStyles'

const Hero = () => {
    
    const [state] = useState({
        title:"Hello World",
        titleTwo: "My Name is",
        titleThree: "Ahmed Habib",
        image:require ("./images/ahmed-habib.png")
    })
    return (
        <>
        <HomeSection >
          <svg style={{top:80, position:"absolute"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
             <path fill="#db717d" fill-opacity="0.35" d="M0,96L7.1,90.7C14.1,85,28,75,42,96C56.5,117,71,171,85,208C98.8,245,113,267,127,250.7C141.2,235,155,181,169,144C183.5,107,198,85,212,64C225.9,43,240,21,254,53.3C268.2,85,282,171,296,181.3C310.6,192,325,128,339,128C352.9,128,367,192,381,186.7C395.3,181,409,107,424,96C437.6,85,452,139,466,170.7C480,203,494,213,508,186.7C522.4,160,536,96,551,101.3C564.7,107,579,181,593,181.3C607.1,181,621,107,635,74.7C649.4,43,664,53,678,69.3C691.8,85,706,107,720,117.3C734.1,128,748,128,762,154.7C776.5,181,791,235,805,218.7C818.8,203,833,117,847,112C861.2,107,875,181,889,213.3C903.5,245,918,235,932,218.7C945.9,203,960,181,974,181.3C988.2,181,1002,203,1016,197.3C1030.6,192,1045,160,1059,160C1072.9,160,1087,192,1101,202.7C1115.3,213,1129,203,1144,192C1157.6,181,1172,171,1186,149.3C1200,128,1214,96,1228,96C1242.4,96,1256,128,1271,165.3C1284.7,203,1299,245,1313,272C1327.1,299,1341,309,1355,288C1369.4,267,1384,213,1398,181.3C1411.8,149,1426,139,1433,133.3L1440,128L1440,0L1432.9,0C1425.9,0,1412,0,1398,0C1383.5,0,1369,0,1355,0C1341.2,0,1327,0,1313,0C1298.8,0,1285,0,1271,0C1256.5,0,1242,0,1228,0C1214.1,0,1200,0,1186,0C1171.8,0,1158,0,1144,0C1129.4,0,1115,0,1101,0C1087.1,0,1073,0,1059,0C1044.7,0,1031,0,1016,0C1002.4,0,988,0,974,0C960,0,946,0,932,0C917.6,0,904,0,889,0C875.3,0,861,0,847,0C832.9,0,819,0,805,0C790.6,0,776,0,762,0C748.2,0,734,0,720,0C705.9,0,692,0,678,0C663.5,0,649,0,635,0C621.2,0,607,0,593,0C578.8,0,565,0,551,0C536.5,0,522,0,508,0C494.1,0,480,0,466,0C451.8,0,438,0,424,0C409.4,0,395,0,381,0C367.1,0,353,0,339,0C324.7,0,311,0,296,0C282.4,0,268,0,254,0C240,0,226,0,212,0C197.6,0,184,0,169,0C155.3,0,141,0,127,0C112.9,0,99,0,85,0C70.6,0,56,0,42,0C28.2,0,14,0,7,0L0,0Z"></path>
          </svg>
          <HomeIntro style={{zIndex:1}} >
                        
              <Heading >
                  <TitleOne>
                      {state.title}
                  </TitleOne>
                  <TitleTwo>
                      {state.titleTwo}
                  </TitleTwo>
                  <TitleThree>
                      {state.titleThree}
                  </TitleThree>
              </Heading>
              <Text >
                  <Typewriter
                  options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings:[
                          "I'm a Front-End Web Developer",
                          "I'm a UX Researcher",
                          "I'm a Digital Marketer"
                      ]
                  }} />
              </Text>
              <ButtonWrapper >
                  <ButtonLink to="about" smooth={true} duration={500} spy={true} >
                     <Button  >About Me</Button>
                  </ButtonLink>
                  <Button> <a href="https://drive.google.com/file/d/1Kv4nnTZqJmw1mZ9j9i6Ak3BjbRZSeMxY/view?usp=sharing" target = "_blank" rel="noreferrer" style={{textDecoration:"none"}}>View My CV</a> </Button>
              </ButtonWrapper>
          </HomeIntro>
          <HomeImage >
              
              <ProfileImage src={state.image} alt="Profile Picture" />
          </HomeImage>
          
        </HomeSection>
         <About  />
        </>
    )
}

export default Hero
