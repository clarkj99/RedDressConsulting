import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import styles from './hero.module.css'

export default ({ data }) => {
  // console.log(data.heroImage);
  return (
    <div className={styles.hero}>
      <BackgroundImage
        fluid={data.heroImage.fluid}
        className={styles.heroImage}
      >
      </BackgroundImage>
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>{data.title}</h3>
        <p className={styles.heroTitle}>{data.shortBio.shortBio}</p>
      </div>

    </div>

  )
}
