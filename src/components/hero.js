import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import styles from './hero.module.css'

export default ({ data }) => {
  // console.log(data.heroImage);
  return (
    <div className={styles.hero}>
      <div className={styles.heroImage}>
        <Img fluid={data.heroImage.fluid} />
      </div>
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>{data.name}</h3>
        <p className={styles.heroTitle}>{data.title}</p>

        {/* <p>{data.shortBio.shortBio}</p> */}
      </div>
    </div>

  )
}
