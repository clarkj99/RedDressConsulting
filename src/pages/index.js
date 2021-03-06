import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Mission from '../components/mission'
import Whatido from '../components/whatido'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulTestimonial.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const services = get(this, 'props.data.allContentfulService.edges')

    return (
      <Layout location={this.props.location} author={author.node}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <Mission />
          <Whatido services={services} />
          <section>
            <div className="wrapper">
              <h2 className="section-headline">Testimonials</h2>
              <ul className="article-list">
                {posts.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <ArticlePreview article={node} />
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
          {/* <Footer author={author.node} /> */}
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulTestimonial(
      limit: 4
      sort: { fields: [publishDate], order: DESC }
      ) {
      edges {
        node {
          title
          slug
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: FILL,cropFocus: FACE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            childMarkdownRemark {
              html
            }
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1200
              resizingBehavior: PAD
              background: "rgb:f4edee"
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
    allContentfulService 
    (sort:{fields:order}){
      edges {
        node {
          id
          order
          longDescription {
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid (
              maxWidth: 1200,
              resizingBehavior: PAD,
              background: "rgb:f4edee"
            ){
              ...GatsbyContentfulFluid
            }
           
          }
        }
      }
    }
  }
`
