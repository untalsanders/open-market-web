'use strict'

import styles from '@styles/Footer.module.scss'
import { FaTwitter } from 'react-icons/fa'
import { GoHeart, GoMarkGithub } from 'react-icons/go'
import { GrStatusGoodSmall } from 'react-icons/gr'
import NetlifyAsset from '@assets/svg/netlify-light.svg'
import SandersAsset from '@assets/svg/sandersgutierrez-light.svg'

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.ServerStatus}>
                <a href="/status">SERVER STATUS</a>
                <GrStatusGoodSmall />
            </div>
            <div className={styles.DeploysAndPowered}>
                <NetlifyAsset />
                <SandersAsset />
            </div>
            <div className={styles.SocialNetworks}>
                <a href="https://github.com/sandersgutierrez/products-api" target="_blank">
                    <GoMarkGithub />
                </a>
                <a href="https://twitter.com/productsapi" target="_blank">
                    <FaTwitter />
                </a>
                <a href="https://sandersgutierrez.github.io/products-api-site/support-us" target="_blank">
                    <GoHeart />
                </a>
            </div>
            <div className={styles.Copyright}>
                <span>
                    ❮❯ by <a href="https://sandersgutierrez.github.io">Sanders Gutiérrez</a>
                </span>
                <span>{new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}
