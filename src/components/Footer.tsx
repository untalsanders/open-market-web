'use strict'

import config from '@/config'
import styles from '@/styles/Footer.module.css'
import { Link } from 'react-router-dom'
import Container from './Container'

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <Container>
                <div className={styles.Copyright}>Copyright &copy; {new Date().getFullYear()} OpenMarket S.R.L.</div>
                <div className={styles.FooterLinks}>
                    <Link to={`${config.APP_URL}/terms`}>Terms of service</Link>
                    <Link to={`${config.APP_URL}/policy`}>Privacy policy</Link>
                    <Link to={`${config.APP_URL}/sitemap`}>Sitemap</Link>
                </div>
            </Container>
        </footer>
    )
}
