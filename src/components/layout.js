import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import Footer from '../components/footer'


class Template extends React.Component {
  render() {
    const { children, author } = this.props

    return (
      <Container>
        <Navigation />
        <div className={"main"}>
          {children}
        </div>
        <Footer author={author} />
      </Container >
    )
  }
}

export default Template
