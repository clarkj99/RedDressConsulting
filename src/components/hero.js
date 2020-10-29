import React from 'react'
// import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import styles from './hero.module.css'
import { Link } from 'gatsby'

export default ({ data }) => {
  // console.log(data.heroImage);
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <BackgroundImage
          fluid={data.heroImage.fluid}
          className={styles.heroImage}
        >
        </BackgroundImage>
        <div className={styles.heroDetails}>
          <h3 className={styles.heroHeadline}>{data.title}</h3>
          <p className={styles.heroTitle}>{data.shortBio.shortBio}</p>
          <Link to="/contact/" className="button">Contact Me</Link>
        </div>
      </div>
    </section>

  )
}
