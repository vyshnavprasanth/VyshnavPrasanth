import React from 'react'
import { Timeline } from "antd";
import './About.css'

function About() {
  return (
    <div className='about-me'>
              <div className='about-me-secondary' >
        <h1 style={{ marginBottom: "2rem",color:'rgb(120, 176, 199)' }}>
          Timeline        </h1>
        <Timeline style={{color:'rgb(120, 176, 199)'}}>
          <Timeline.Item>
            Started B.Tech in computer science at NSS College of engineering, Palakkad August 2018.
          </Timeline.Item>
          <Timeline.Item>
          Collaborated with a team of talented developers to form a recognized team at my college, dedicated to undertaking freelance projects from March 2020 to March 2021.
          </Timeline.Item>
          <Timeline.Item>
          Our team has been shortlisted to participate in the prestigious Reboot Kerala Hackathon held at Cherthala. Out of numerous talented participants, we are proud to have been selected among the top 14 finalists.
          </Timeline.Item>
          <Timeline.Item>
          Completed B.Tech in August 2022
          </Timeline.Item>
          <Timeline.Item>
          Worked as a software engineer from August 2022 to May 2023.
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  )
}

export default About