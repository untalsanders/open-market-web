import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'
import { cwd } from 'process'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, cwd())
    const APP_URL = env.VITE_APP_URL ?? ''

    return {
        root: 'src/',
        base: APP_URL,
        plugins: [
            svgr({
                include: '**/*.svg?react',
            }),
            react(),
        ],
        resolve: {
            alias: {
                '@': resolve('./src'),
            },
        },
    }
})
