'use strict'

import '@/styles/global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

const root = createRoot(document.querySelector('#root') as HTMLElement)

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
