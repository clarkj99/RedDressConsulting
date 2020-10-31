import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css';

import styles from './blog-post.module.css'

class TestimonialTemplate extends React.Component {
  state = {
    photoIndex: 0,
    lightboxIsOpen: false
  }

  render() {
    const post = get(this.props, 'data.contentfulTestimonial')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const images = post.photoGroup.map((photo => photo.file.url))
    const { photoIndex, lightboxIsOpen } = this.state

    return (
      <Layout location={this.props.location}>
        {lightboxIsOpen && (
          <Lightbox
            imagePadding={60}
            wrapperClassName={styles.lightbox}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ lightboxIsOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        <div style={{ background: '#f3eef0' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <section>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.hero}>
                <Img
                  className={styles.heroImage}
                  alt={post.title}
                  fluid={post.heroImage.fluid}
                  imgStyle={{ objectPosition: "top", objectFit: "cover", height: "100%" }}
                />

                <div className={styles.heroDetails}>
                  <h1 className="section-headline">{post.title}</h1>
                  <div className={styles.testimonial}
                    dangerouslySetInnerHTML={{
                      __html: post.body.childMarkdownRemark.html,
                    }}
                  />

                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-evenly" }}>
                  {
                    post.photoGroup.map(
                      (photo, i) => <a onClick={() => this.setState({
                        lightboxIsOpen: true,
                        photoIndex: i

                      })}>
                        <Img
                          className={styles.blogImages}
                          fluid={photo.fluid}
                          objectPosition="top"
                          imgStyle={{ objectPosition: "top", objectFit: "cover", height: "100%" }}
                        // style={{ flex: 1, maxHeight: 400, minWidth: 400, maxWidth: 600, margin: 30, backgroundPosition: "top", boxShadow: "4px 4px 5px #33333350", borderRadius: 15 }}
                        />
                      </a>
                    )
                  }
                </div>
              </div>
            </div>
          </section>
        </div >
      </Layout >
    )
  }
}

export default TestimonialTemplate

export const pageQuery = graphql`
  query TestimonialBySlug($slug: String!) {
            contentfulTestimonial(slug: {eq: $slug }) {
            title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
            fluid(cropFocus: TOP,resizingBehavior: FILL,maxWidth: 1280, maxHeight:800,background: "rgb:f4edee") {
            ...GatsbyContentfulFluid
          }
      }
      body {
            childMarkdownRemark {
            html
          }
      }
      photoGroup {
            file {
            url
          }
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
