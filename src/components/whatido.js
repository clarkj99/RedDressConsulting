import React from 'react'
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const ServicesBlock = ({ service }) => (

    <div className="service">
        <BackgroundImage
            className="service-image"
            fluid={service.image.fluid}
        >
            <div className="service-num">
                <p style={{ margin: 0 }}>{service.order}</p>
            </div>
        </BackgroundImage >
        {/* <div>
            <Img
                className="service-img"
                fluid={service.image.fluid}
            />
            <div className="service-num">
                <p>{service.order}</p>
            </div>
        </div> */}
        <div style={{ flex: 0 }}>
            <p>paragraph</p>
        </div>
    </div >


)

const Whatido = ({ services }) => {
    console.log(services)
    return (
        <section style={{ backgroundColor: "#C41E2C", color: "#FFFFFF" }} >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h2>What I Do</h2>
                <div className="services-list">
                    {services.map(service => <ServicesBlock key={service.node.id} service={service.node} />)}

                </div>
                <Link to="/contact/" className="button" style={{ flex: 0, borderRadius: 30 }}>Contact for Complimentary Consultation AND to Discuss Services and Rates</Link>
            </div>
        </section >
    )
}

export default Whatido
