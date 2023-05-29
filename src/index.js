'use strict'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Hero } from 'Components/Hero'
import 'Styles/global.scss'
import { data } from '../data'

const root = createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <Hero data={data} name="Sanders" />
    </StrictMode>
)
