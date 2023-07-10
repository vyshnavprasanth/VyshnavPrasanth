import { React, useState } from 'react'
import { Card } from 'antd'
import './Project.css'

const { Meta } = Card;
const Project = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <h1 className="heading-timeline" style={{ marginTop: '2vh', marginBottom: "1vh", color: 'black', textAlign: 'center' }}>
        Projects
      </h1>
      <div className="projects">

        <Card
          cover={<img alt="example" src={`${process.env.PUBLIC_URL}/assets/netflix.png`} style={{ height: "30vh", width: '30vw' }} />}
          hoverable
          className="hover-card"
        >
          <div className="hover-content">
            <Meta title="Netflix Clone" description="ReactJS, CSS" />
          </div>
        </Card>

        <Card
          cover={<img alt="example" src={`${process.env.PUBLIC_URL}/assets/product-identifier.png`} style={{ height: "30vh", width: '30vw' }} />}
          hoverable
          className="hover-card"
        >
          <div className="hover-content">
            <Meta title="Product Identifier" description="ReactJS, CSS" />
          </div>
        </Card>
        <Card
          cover={<img alt="example" src={`${process.env.PUBLIC_URL}/assets/e-store.png`}  style={{ height: "30vh", width: '30vw' }}  />}
          hoverable
          className="hover-card"
        >
          <div className="hover-content">
            <Meta title="E-Store" description="HandlebarsJS, ExpressJS, Bootstrap, Razorpay Integration" />
          </div>
        </Card>
        <Card
          cover={<img alt="example" src={`${process.env.PUBLIC_URL}/assets/IoT.png`}  style={{ height: "30vh", width: '30vw' }}  />}
          hoverable
          className="hover-card"
        >
          <div className="hover-content">
            <Meta title="Intrusion Detection in Home IoT" description=" HandlebarsJS, ExpressJS, C++, Python, Deep Learning" />
          </div>
        </Card>

        <Card
          cover={<img alt="example" src={`${process.env.PUBLIC_URL}/assets/mess-management.png`}  style={{ height: "30vh", width: '30vw' }}  />}
          hoverable
          className="hover-card"
        >
          <div className="hover-content">
            <Meta title="Mess Management" description="HandlebarsJS, ExpressJS, Bootstrap, JQuery" />
          </div>
        </Card>
    

        <Card
          cover={<img alt="example" src={`${process.env.PUBLIC_URL}/assets/preview.png`}  style={{ height: "30vh", width: '30vw' }}  />}
          hoverable
          className="hover-card"
        >
          <div className="hover-content">
            <Meta title="Reeboot Kerala Hackathon 2020" description="Html, CSS, Bootstrap, Java, Machine Learning " />
          </div>
        </Card>


      </div>
    </div>
  )

}
export default Project;