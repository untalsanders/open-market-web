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
                    <Route exact path={BASE_URL} element={<HomePage />} />
                    <Route path={`${BASE_URL}/documentation`} element={<DocumentationPage />} />
                    <Route path={`${BASE_URL}/about`} element={<AboutPage />} />
                    <Route path={`${BASE_URL}/support-us`} element={<SupportUsPage />} />
                </Routes>
            </Wrapper>
        </main>
    )
}
