import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AnimationProvider } from './Components/Animation.jsx';

createRoot(document.getElementById('root')).render(
 <AnimationProvider>
  <App />
 </AnimationProvider>
  
  
)
