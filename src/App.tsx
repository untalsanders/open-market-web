'use strict'

import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {
    return (
        <>
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
