import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <section style={{ backgroundColor: "#000000", color: "#FFFFFF", flex: 1, padding: 30, fontSize: 36 }} >
        <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-evenly" }}>
            <div><FontAwesomeIcon icon={faLinkedin} /></div>
            <div><FontAwesomeIcon icon={faFacebookSquare} /></div>
            <div><FontAwesomeIcon icon={faInstagramSquare} /></div>
        </div>
    </section >
)

export default Footer;