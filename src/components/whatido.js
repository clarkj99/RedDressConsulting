import React from 'react'
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby'
import styles from './whatido.module.css'

const ServicesBlock = ({ service }) => (
    //TODO make a list (ul) for equal height

    <div className={styles.service}>
        <BackgroundImage
            className={styles.serviceImage}
            fluid={service.image.fluid}
        >
            <div className={styles.serviceNum}>
                <p style={{ margin: 0 }}>{service.order}</p>
            </div>
        </BackgroundImage >
        <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <div style={{ textAlign: "center", height: "100%" }} dangerouslySetInnerHTML={{ __html: service.longDescription.childMarkdownRemark.html }}></div>
        </div>
    </div >
)

const Whatido = ({ services }) => {
    console.log(services)
    return (
        <section style={{ backgroundColor: "#C41E2C", color: "#FFFFFF" }} >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h2>What I Do</h2>
                <div className={styles.servicesList}>
                    {services.map(service => <ServicesBlock key={service.node.id} service={service.node} />)}

                </div>
                <Link to="/contact/" className={'button ' + styles.button}>Contact for Complimentary Consultation AND to Discuss Services and Rates</Link>
            </div>
        </section >
    )
}

export default Whatido
