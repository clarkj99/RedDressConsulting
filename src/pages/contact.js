import React from 'react'
// import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

class ContactIndex extends React.Component {

    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const [author] = get(this, 'props.data.allContentfulPerson.edges')

        return (
            <Layout location={this.props.location} author={author.node}>
                <Helmet title={siteTitle} />
                <section>
                    <h1>Contact Me</h1>
                </section>
            </Layout>
        )
    }
}

export default ContactIndex

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
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
