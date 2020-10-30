import React from 'react'
import styles from './logo.module.css'
import { Link } from 'gatsby'

const Logo = () => (
    <div>
        <Link to="/" className={styles.logo}>Red Dress Consulting</Link>
    </div>

)

export default Logo

