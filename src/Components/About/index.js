import React, { useEffect, useState } from 'react'
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { Author, Bio, Container, Heading, Img, Main, Section, TextWrapper, Wrapper } from './AboutElements.js';
import { Button, ButtonWrapper } from '../../globalStyles.js';
import Experience from '../Experience/index.js';
import Education from '../Education/index.js';
import {FaArrowCircleDown} from 'react-icons/fa'; 


const builder = imageUrlBuilder(sanityClient);
const urlFor =(source) => {
  return builder.image(source);
}

const About = () => {

    const [author, setAuthor] = useState(null);
    const [showComponent, setShowComponent] = useState(true)
      


    useEffect(()=>{
        sanityClient.fetch(`*[_type == "author"]{
            name,
            "bio": bio[0].children[0].text,
            "authorImage": image.asset->url
        }`)
        .then((data)=>setAuthor(data[0]))
        .catch(console.error);
    },[])

    if (!author) return <div></div>;
    return (
        <>
      
        <Main id="about">
          <Container>
              <Section className="lg:flex ">
                  <Img src={urlFor(author.authorImage).url()} alt='Ahmed Habib' />
                  <TextWrapper>
                      <Heading>
                          Hello World I'm {" "}
                          <Author>
                              {author.name}
                          </Author>
                      </Heading>
                      <Bio>
                          {author.bio}
                      </Bio>
                      <Wrapper to="info" smooth={true} duration={500} spy={true}>
                          <FaArrowCircleDown style={{height:"60px", width:"60px"}}  />
                      </Wrapper>
                      
                  </TextWrapper>
                  
                  
              </Section>
              
             
          </Container>  
          <ButtonWrapper id='info' style={{justifyContent:"center"}}>
             <Button style={{marginRight:"1rem"}} onClick={()=> setShowComponent(false)}>Experience</Button>
             <Button onClick={()=> setShowComponent(true)}>Education</Button>
          </ButtonWrapper>
          <div  style={{marginTop:"2rem"}}>
            {showComponent ?  <Education /> : <Experience />  }  
          </div>
        </Main>
        </>
    )
}

export default About
