'use strict'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Hero } from './components/Hero'
import './style.css'
import { data } from '../data'

const root = createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <Hero data={data} name="Sanders" />
    </StrictMode>
)
