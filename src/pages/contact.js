import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

class ContactIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        return (
            <Layout location={this.props.location}>
                <Helmet title={siteTitle} />
                <section>
                    <h1>Contact Me</h1>
                </section>
            </Layout>
        )
    }
}

export default ContactIndex