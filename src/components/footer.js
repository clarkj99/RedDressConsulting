import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ author }) => {
    return (
        <section style={{ backgroundColor: "#000000", color: "#FFFFFF", flex: 1, padding: 10, fontSize: 36 }} >
            <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-evenly" }}>
                <div>
                    <a href={author.linkedIn} target="blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <div>
                    <a href={author.facebook} target="blank">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                </div>
                <div>
                    <a href={author.instagram} target="blank">
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                </div>
            </div>
        </section >
    )
}

export default Footer;