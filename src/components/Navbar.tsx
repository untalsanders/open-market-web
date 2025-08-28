'use strict'

import config from '@/config'
import styles from '@/styles/Header.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <Link to={`${config.APP_URL}/documentation`}>Docs</Link>
            <Link to={`${config.APP_URL}/about`}>About</Link>
            <Link to={`${config.APP_URL}/support-us`}>Support Us</Link>
        </nav>
    )
}
