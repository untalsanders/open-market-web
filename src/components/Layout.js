'use strict'

import styles from '@styles/Layout.module.scss'

export default function Layout({ children }) {
    return <div className={styles.Layout}>{children}</div>
}
