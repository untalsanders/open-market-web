'use strict'

import Wrapper from '@components/Wrapper'
import AboutPage from '@pages/about'
import DocumentationPage from '@pages/docs'
import HomePage from '@pages/home'
import SupportUsPage from '@pages/support-us'
import { Route, Routes } from 'react-router-dom'

export default function Main() {
    return (
        <main>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/documentation" element={<DocumentationPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/support-us" element={<SupportUsPage />} />
                </Routes>
            </Wrapper>
        </main>
    )
}
