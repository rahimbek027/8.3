import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CountryContext } from './context/Context.tsx'

createRoot(document.getElementById('root')!).render(
    
  <CountryContext>
    <App />
  </CountryContext>
)
