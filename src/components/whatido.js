import React from 'react'
import BackgroundImage from 'gatsby-background-image';


const ServicesBlock = ({ title, text }) => (
    <div>
        <BackgroundImage>
            <p>  {title}</p>
        </BackgroundImage>
    </div>
)


const Whatido = () => (
    <section style={{ backgroundColor: "#C41E2C", color: "#FFFFFF" }} >
        <div style={{ flexDirection: "column", alignItems: "center" }}>
            <h2>What I Do</h2>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <ServicesBlock title="1" />
                <ServicesBlock title="2" />
                <ServicesBlock title="3" />

            </div>
        </div>
    </section >
)

export default Whatido;