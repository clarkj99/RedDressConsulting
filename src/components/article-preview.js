import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => {
  console.log("article", article);
  return (
    <div className={styles.preview}>
      <Link to={`/blog/${article.slug}`}>
        <Img alt={article.title} fluid={article.heroImage.fluid} className={styles.image} />
      </Link>
      <h3 className={styles.previewTitle}>
        <Link style={{ textDecoration: "none" }} to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
      <Link to={`/blog/${article.slug}`}>{"more >"}</Link>
    </div>
  )
}
