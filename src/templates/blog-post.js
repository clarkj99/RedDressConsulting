import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Modal from 'react-modal'

import heroStyles from '../components/hero.module.css'
// Modal.setAppElement('#photoModal')

class TestimonialTemplate extends React.Component {
  state = {
    showModal: false,
    image: null
  }

  render() {
    const post = get(this.props, 'data.contentfulTestimonial')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { showModal } = this.state
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#f4edee' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <section>
            <div className={heroStyles.hero}>
              <Img
                // className={heroStyles.heroImage}
                style={{ flex: 1 }}
                alt={post.title}
                fluid={post.heroImage.fluid}
              />
            </div>
          </section>
          <section>
            <div className="wrapper">
              <h1 className="section-headline">{post.title}</h1>
              <p
                style={{
                  display: 'block',
                }}
              >
                {post.publishDate}
              </p>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.body.childMarkdownRemark.html,
                  }}
                />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                {
                  post.photoGroup.map(
                    photo => <a onClick={() => this.setState({ showModal: true, image: photo.fixed })}>
                      <Img
                        fluid={photo.fluid}
                        objectPosition="top"
                        imgStyle={{ objectPosition: "top", objectFit: "cover", height: "100%" }}
                        style={{ flex: 1, maxHeight: "30vh", minWidth: 400, maxWidth: 600, margin: 30, backgroundPosition: "top", boxShadow: "4px 4px 5px #33333350", borderRadius: 15 }}
                      />
                    </a>
                  )
                }
              </div>
            </div>
          </section>
        </div>
        <Modal
          isOpen={showModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          style={{
            overlay: { backgroundColor: "#000000DD" },
            content: { background: '#00000050', border: "none" }
          }}
          onRequestClose={() => this.setState({ showModal: false })}
        >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
            <button onClick={() => this.setState({ showModal: false })} style={{ fontSize: 18, border: "none", borderRadius: 10 }}>close</button>
            <Img
              fixed={this.state.image}
              style={{ flex: 1, maxHeight: "80vh" }}
              imgStyle={{ objectFit: "scale-down" }}
            />
          </div>
        </Modal>
      </Layout >
    )
  }
}

export default TestimonialTemplate

export const pageQuery = graphql`
  query TestimonialBySlug($slug: String!) {
    contentfulTestimonial(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(resizingBehavior: PAD,maxWidth: 1280, maxHeight:800,background: "rgb:f4edee") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      photoGroup {
        fluid(cropFocus: FACES, resizingBehavior: FILL, maxWidth: 1280) {
          ...GatsbyContentfulFluid
        }
        fixed (width: 1200){
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
