import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <div className={styles.navbar}>
    <section>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>Red Dress Consulting</Link>
        <nav role="navigation" style={{ flex: 0 }}>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}>
              <Link to="/">Home</Link>
            </li>
            {/* <li className={styles.navigationItem}>
              <Link to="/testimonial/">Testimonials</Link>
            </li> */}
            <li className={styles.navigationItem}>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </ div >
)
