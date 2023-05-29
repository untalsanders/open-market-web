'use strict'

import NetlifyAsset from '@assets/svg/netlify-light.svg'
import SandersAsset from '@assets/svg/sandersgutierrez-light.svg'
import Layout from '@components/Layout'
import AboutPage from '@pages/about'
import DocumentationPage from '@pages/docs'
import HomePage from '@pages/home'
import SupportUsPage from '@pages/support-us'
import styles from '@styles/Layout.module.scss'
import { FaProductHunt, FaTwitter } from 'react-icons/fa'
import { GoHeart, GoMarkGithub } from 'react-icons/go'
import { GrStatusGoodSmall } from 'react-icons/gr'
import { Link, Route, Routes } from 'react-router-dom'

export default function App() {
    return (
        <Layout>
            <header className={styles.Header}>
                <div className={styles.Wrapper}>
                    <Link className={styles.Logo} to="/">
                        <FaProductHunt />
                        Product-API
                    </Link>
                    <nav className={styles.Navbar}>
                        <Link to="/documentation">Docs</Link>
                        <Link to="/about">About</Link>
                        <Link to="/support-us">Support Us</Link>
                    </nav>
                </div>
            </header>
            <main className={styles.Main}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/documentation" element={<DocumentationPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/support-us" element={<SupportUsPage />} />
                </Routes>
            </main>
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
        </Layout>
    )
}
