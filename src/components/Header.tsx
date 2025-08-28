'use strict'

import styles from '@/styles/Header.module.css'
import Logo from './Logo'
import Navbar from './Navbar'
import Container from './Container'

export default function Header() {
    return (
        <header className={styles.Header}>
            <Container>
                <Logo />
                <Navbar />
            </Container>
        </header>
    )
}
