import React, { useEffect, useState } from 'react'
import { Button, ButtonWrapper } from '../../globalStyles'
import { Box, Card, Container, Content, Description, Heading, Img, Title } from './ProjectsElements'
import sanityClient from "../../client.js";

const Projects = () => {
    const [projectData, setProjectData] = useState(null);

    useEffect(()=>{
        sanityClient
        .fetch(
            `*[_type == "project"]{
                title,
                mainImage{
                    asset ->{
                        _id,
                        url
                    },
                    alt
                },
                date,
                place,
                description,
                projectType,
                link,
                github,
                tags
            }`
        )
        .then((data)=> setProjectData(data))
        .catch(console.error);
    },[]);

    if (!projectData) return <div style={{background:"#2b2c2f"}}>Loading...</div>;

    return (
        <div style={{background:"#2b2c2f"}}>
            <Container>
                <Heading>My Projects</Heading>
                <Card>
                {projectData && projectData.map((project, index)=>(
                    <Box>
                        <Content>
                           <Img src={project.mainImage.asset.url}
                                alt={project.mainImage.alt}/>
                                <Description style={{fontSize:"1rem"}}>
                                  {new Date(project.date).toLocaleDateString()}
                                </Description>
                           <Title href={project.link}
                                  alt={project.title}>
                                {project.title}
                           </Title>
                           
                           <Description>
                           {project.description}
                           </Description>
                           <ButtonWrapper style={{justifyContent:"center"}} >
                             <Button style={{fontSize:"1.5rem"}}>
                                 <a target="_blank" rel="noreferrer" href={project.link}> Live Demo</a>
                             </Button>
                             <Button style={{fontSize:"1.5rem"}}>
                                 <a target="_blank" rel="noreferrer" href={project.github}> Source Code</a>
                             </Button>
                          </ButtonWrapper> 
                        </Content> 
                        </Box>
                         ))}
                </Card>
            </Container>
        </div>
    )
}

export default Projects
