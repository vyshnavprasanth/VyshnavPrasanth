import React from 'react'
import './About.css'
import { Timeline, Card } from 'antd';

function About() {
  return (
    <div className='about-me'>
      <div className='about-me-secondary'>
        <h1 className ="heading-timeline" style={{ marginBottom: "4rem", color: 'black',textAlign:'center' }}>
          Timeline
        </h1>
        <div className="timeline-container">
          <Timeline style={{ color: 'rgb(120, 176, 199)' }} mode="alternate">
            <Timeline.Item>
              <Card className="timeline-card">
                <p>Started B.Tech in computer science at NSS College of engineering, Palakkad August 2018.</p>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card className="timeline-card">
                <p>Collaborated with a team of talented developers to form a recognized team at my college, dedicated to undertaking freelance projects from March 2020 to March 2021.</p>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card className="timeline-card">
                <p>Our team has been shortlisted to participate in the prestigious Reboot Kerala Hackathon held at Cherthala. Out of numerous talented participants, we are proud to have been selected among the top 14 finalists.</p>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card className="timeline-card" style={{marginLeft:'9vw'}}>
                <p>Completed B.Tech in computer science and engineering August 2022</p>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card className="timeline-card">
                <p>Worked as a software engineer from August 2022 to May 2023.</p>
              </Card>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
export default About