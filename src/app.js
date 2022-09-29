'use strict'

import * as ReactDOM from 'react-dom/client'

function Welcome({ name }) {
    return <h1>Hello {name}, Welcome</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Welcome name="Sanders" />)
