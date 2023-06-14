'use strict'

import styles from '@styles/Header.module.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <Link to={`${BASE_URL}/documentation`}>Docs</Link>
            <Link to={`${BASE_URL}/about`}>About</Link>
            <Link to={`${BASE_URL}/support-us`}>Support Us</Link>
        </nav>
    )
}
