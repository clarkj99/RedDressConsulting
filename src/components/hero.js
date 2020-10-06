import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <BackgroundImage
    tag='hero'
    className={styles.hero}
    fluid={data.heroImage.fluid}
    backgroundColor={`#040e18`}
  >
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </BackgroundImage>
)
