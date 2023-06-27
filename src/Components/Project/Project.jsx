import { React} from 'react'
import {  Card } from 'antd';
import './Project.css'

const { Meta } = Card;
const Project = () => {


  return (<div className="projects">
    <Card
      className="project-card"
      style={{
        width: 340,
        height: 240,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}
      cover={<img alt="Project" src={`${process.env.PUBLIC_URL}/assets/netflix.png`} style={{ height: '100%', objectFit: 'cover' }} />}
    >
          <div className="card-overlay">
        <p><strong>Responsive front end of netflix application.</strong></p>
      </div>
      <Meta className='card-info'
        title={<span style={{ color: 'rgb(120, 176, 199)' }}>Netflix Clone</span>}
        description={<span style={{ color: 'rgb(120, 176, 199)' }}>Tech Stack: ReactJS, CSS.</span>} style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'transparent',
          padding: '8px',
        }}
      />
    </Card>

    <Card
      className="project-card"
      style={{
        width: 340,
        height: 240,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}
      cover={<img alt="Project" src={`${process.env.PUBLIC_URL}/assets/product-identifier.png`} style={{ height: '100%', objectFit: 'cover' }} />}
    >
        <div className="card-overlay">
        <p><strong>Responsive front end of netflix application.</strong></p>
      </div>
      <Meta className='card-info'
        title={<span style={{ color: 'rgb(120, 176, 199)' }}>Product Identifier</span>}
        description={<span style={{ color: 'rgb(120, 176, 199)' }}>Tech Stack: ReactJS, CSS.</span>} style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'transparent',
          padding: '8px',
        }}
      />
    </Card>

    <Card
      className="project-card"
      style={{
        width: 340,
        height: 240,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}
      cover={<img alt="Project" src={`${process.env.PUBLIC_URL}/assets/IoT.png`} style={{ height: '100%', objectFit: 'cover' }} />}
    >
      <Meta className='card-info'
        title={<span style={{ color: 'rgb(120, 176, 199)' }}>Intrusion detection in home IoT</span>}
        description={<span style={{ color: 'rgb(120, 176, 199)' }}>Tech Stack:  HandlebarsJS, ExpressJS, C++, Python.</span>} style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'transparent',
          padding: '8px',
        }}
      />
    </Card>

    <Card
      className="project-card"
      style={{
        width: 340,
        height: 240,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}
      cover={<img alt="Project" src={`${process.env.PUBLIC_URL}/assets/mess-management.png`} style={{ height: '100%', objectFit: 'contain' }} />}
    >
      <Meta className='card-info'
        title={<span style={{ color: 'rgb(120, 176, 199)' }}>Mess Management App</span>}
        description={<span style={{ color: 'rgb(120, 176, 199)' }}>Tech Stack:  HandlebarsJS, ExpressJS, Bootstrap, JQuery</span>} style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'transparent',
          padding: '8px',
        }}
      />
    </Card>

    <Card
      className="project-card"
      style={{
        width: 340,
        height: 240,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}
      cover={<img alt="Project" src={`${process.env.PUBLIC_URL}/assets/e-store.png`} style={{ height: '100%', objectFit: 'contain' }} />}
    >
      <Meta className='card-info'
        title={<span style={{ color: 'rgb(120, 176, 199)' }}>E-Store</span>}
        description={<span style={{ color: 'rgb(120, 176, 199)' }}>Tech Stack:  HandlebarsJS, ExpressJS, Bootstrap, Razorpay Integration</span>} style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'transparent',
          padding: '8px',
        }}
      />
    </Card>



  </div>)

}
export default Project;