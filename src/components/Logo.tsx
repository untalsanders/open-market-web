'use strict'

import config from '@/config'
import styles from '@/styles/Header.module.css'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <Link className={styles.Logo} to={config.APP_URL}>
            <img src="/assets/logo.svg" alt="logo" width={35} height={35} />
            OpenMarket
        </Link>
    )
}
