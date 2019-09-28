import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from 'src/views/App'
import '@/assets/css/index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
