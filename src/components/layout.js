import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import Logo from './logo'
import Footer from '../components/footer'
import get from 'lodash/get'


class Template extends React.Component {
  render() {
    const { children, author } = this.props

    return (
      <Container>
        {/* <Navigation /> */}
        <Logo />
        {children}
        <Footer author={author} />
      </Container>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query LayoutIndex {
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