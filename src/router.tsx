import config from '@/config'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/home-page'
import AboutPage from './pages/about-page'
import SupportUsPage from './pages/support-us-page'
import DocumentationPage from './pages/docs-page'

export const router = createBrowserRouter([
    {
        path: config.APP_URL,
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'documentation',
                element: <DocumentationPage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'support-us',
                element: <SupportUsPage />,
            },
        ],
    },
])
