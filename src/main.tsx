import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import ToastProvider from './components/ToastProvider.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
        <ToastProvider/>
        <App />
    </AuthProvider>
  </StrictMode>,
)
