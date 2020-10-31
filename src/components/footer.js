import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby';

const Footer = ({ author }) => {
    console.log("author", author);
    return (
        <section style={{ backgroundColor: "#000000", color: "#FFFFFF", flex: 1, padding: 30, fontSize: 36 }} >
            <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-evenly" }}>
                <div>
                    <a href={author.linkedIn}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <div>
                    <a href={author.facebook}>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                </div>
                <div>
                    <a href={author.instagram}>
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                </div>
            </div>
        </section >
    )
}

export default Footer;