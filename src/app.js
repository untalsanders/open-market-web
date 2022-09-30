'use strict'

import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import './style.css'

const data = {
    avatar: 'https://avatars.githubusercontent.com/u/2822437?v=4',
    message: 'This was done by a crazy developer',
    repository: 'https://github.com/sandersgutierrez/static-website',
    links: [
        {
            id: 1,
            name: 'github',
            url: 'https://github.com',
            icon: 'fa-brands fa-github',
            username: 'sandersgutierrez',
        },
        {
            id: 2,
            name: 'linkedin',
            url: 'https://linkedin.com/in',
            icon: 'fa-brands fa-linkedin',
            username: 'sandersgutierrez',
        },
        {
            id: 3,
            name: 'twitter',
            url: 'https://twitter.com',
            icon: 'fa-brands fa-twitter',
            username: 'untalsanders',
        },
        {
            id: 4,
            name: 'instagram',
            url: 'https://instagram.com',
            icon: 'fa-brands fa-instagram',
            username: 'untalsanders',
        },
    ],
}

function Hero({ data, name }) {
    const { links, avatar, repository, message } = data

    const listItem = links.map(item => (
        <a key={item.id} href={`${item.url}/${item.username}`} target="_blank">
            <i className={item.icon}></i>
        </a>
    ))

    return (
        <div className="card-hero">
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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <Hero data={data} name="Sanders" />
    </StrictMode>
)
