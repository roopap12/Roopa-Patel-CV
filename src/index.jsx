import { createRoot } from 'react-dom/client'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app')).render(<App />)
})
