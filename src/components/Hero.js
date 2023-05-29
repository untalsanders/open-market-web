'use strict'

import styles from 'Styles/Hero.module.scss'

export function Hero({ data, name }) {
    const { links, avatar, repository, message } = data

    const listItem = links.map(item => (
        <a key={item.id} href={`${item.url}/${item.username}`} target="_blank">
            <i className={item.icon}></i>
        </a>
    ))

    return (
        <div className={styles.cardHero}>
            <img src={avatar} />
            <p>Hello {name}, I greet it from GitHub Pages</p>
            <nav>{listItem}</nav>
            <p>{message}</p>
            <span>
                <a href={repository}>
                    <i className="fa-brands fa-github"></i>
                    View Repository
                </a>
            </span>
        </div>
    )
}
