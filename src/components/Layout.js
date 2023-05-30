'use strict'

import styles from '@styles/Layout.module.scss'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Layout({ children }) {
    return (
        <div className={styles.Layout}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
