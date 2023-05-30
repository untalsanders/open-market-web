'use strict'

import Logo from '@components/Logo'
import Navbar from '@components/Navbar'
import Wrapper from '@components/Wrapper'
import styles from '@styles/Header.module.scss'

export default function Header() {
    return (
        <header className={styles.Header}>
            <Wrapper>
                <Logo />
                <Navbar />
            </Wrapper>
        </header>
    )
}
