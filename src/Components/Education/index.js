import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import educationContent from './data'
import { ReactComponent as SchoolIcon } from "./school.svg";
import './styles.css'
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
    let schoolIconStyles = { background: "#db717d" };

    return (
        <>
<VerticalTimeline>
        {
          educationContent.map( (element) => {
            return (
              <VerticalTimelineElement
               key={element.id}
               date={element.date}
               dateClassName="dateEdu"
               iconStyle={schoolIconStyles}
               icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title ">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle edu">
                  {element.location}
                </h5>
                <p id="description">
                  {element.description}
                </p>
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
        </>
    )
}

export default Education
