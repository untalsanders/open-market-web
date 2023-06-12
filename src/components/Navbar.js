'use strict'

import styles from '@styles/Header.module.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <Link to="documentation">Docs</Link>
            <Link to="about">About</Link>
            <Link to="support-us">Support Us</Link>
        </nav>
    )
}
