const { VITE_APP_URL } = import.meta.env

export default {
    APP_URL: VITE_APP_URL ?? '',
}
