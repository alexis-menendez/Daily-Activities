import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './components/AuthContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
)
