import React from 'react'
// import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import styles from './contact.module.css'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
class ContactIndex extends React.Component {

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    console.log("author", author);
    return (
      <Layout location={this.props.location} author={author.node}>
        <div style={{ background: '#f3eef0', height: "100%" }}>
          <Helmet title={`Contact | ${siteTitle}`} />
          <section className={styles.section}>
            <div className={styles.hero}>
              <Img
                className={styles.heroImage}
                alt={author.node.name}
                fluid={author.node.contactImage.fluid}
                imgStyle={{ objectPosition: "top", objectFit: "cover", height: "100%" }}
              />
              <div className={styles.heroDetails}>
                <h1 className="section-headline">Contact Me</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: author.node.contactDescription.childMarkdownRemark.html,
                  }}
                />
                <div className={{}} />
                <h2>Social Media</h2>
                <div>
                  <a href={author.node.linkedIn} target="blank">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                  </a>
                </div>
                <div>
                  <a href={author.node.facebook} target="blank">
                    <FontAwesomeIcon icon={faFacebookSquare} /> Facebook
                  </a>
                </div>
                <div>
                  <a href={author.node.instagram} target="blank">
                    <FontAwesomeIcon icon={faInstagramSquare} /> Instagram
                  </a>
                </div>
                <h2>Phone</h2>
                <a href={`tel:${author.node.phone}`}>{author.node.phone}</a>
                <h2>Email</h2>
                <a href={`tel:${author.node.email}`}>{author.node.email}</a>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default ContactIndex

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
          }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
          edges {
          node {
            name
            contactDescription {
              childMarkdownRemark {
                html
              }
            }
            contactImage {
              fluid(maxWidth: 1200
              resizingBehavior: FILL,
              cropFocus: FACE
            ) {
                ...GatsbyContentfulFluid
              }
            }
            email
            phone
            facebook
            instagram
            linkedIn
        }
      }
    }
  }
`
