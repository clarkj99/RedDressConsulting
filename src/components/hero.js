import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Typed from 'react-typed'
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
      <p className={styles.heroTyped}>
        <Typed
          strings={[
            "Personal Shopping and Styling for Women's Clothes",
            "Wardrobe Editing",
            "Wardrobe Maintenance",
            "Wardrobe Renewal",
            "Sourcing Unique Finds and Fashion Show Production"
          ]}
          typeSpeed={40}
          showCursor={true}
          loop={true}
          backSpeed={30}

        />
      </p>
      {/* <p>{data.shortBio.shortBio}</p> */}
    </div>
  </BackgroundImage>
)
