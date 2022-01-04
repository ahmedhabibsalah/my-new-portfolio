import React, { useEffect, useState } from 'react'
import sanityClient from '../../client'
import { ServicesCard, ServicesContainer, ServicesHeading, ServicesIcon, ServicesParagraph, ServicesSecondHeader, ServicesWrapper } from './servicesElements';

import { motion } from "framer-motion";



const Services = () => {
    const [postData, setPostData] = useState(null);
    useEffect(()=>{
        sanityClient
        .fetch(`*[_type == "post"]{
            title,
            slug,
            description,
            mainImage{
                asset ->{
                    _id,
                    url
                },
                alt,

            }
        }`)
        .then((data)=> setPostData(data))
        .catch(console.error)
    },[])
    return (
        <>
        
            <ServicesContainer  > 
                <ServicesHeading> My Services</ServicesHeading>
                <motion.div
                  className="container"
                  initial={{ scale: 1 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                <ServicesWrapper >
                    {
                      postData && postData.map((post, index,id,p)=>(
                       <ServicesCard  >
                        <ServicesIcon src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                        <ServicesSecondHeader>{post.title}</ServicesSecondHeader>
                       
                        <ServicesParagraph  >
                          {post.description}
                        </ServicesParagraph>
                      </ServicesCard> 
                      ))}
                </ServicesWrapper>
                </motion.div>
         </ServicesContainer>
        </>
    )
}

export default Services
