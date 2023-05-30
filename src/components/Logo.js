'use strict'

import styles from '@styles/Header.module.scss'
import { FaProductHunt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <Link className={styles.Logo} to="/">
            <FaProductHunt />
            Product-API
        </Link>
    )
}
