import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarrinhoProvider } from './Context/CarrinhoContext.jsx'

createRoot(document.getElementById('root')).render(
  <CarrinhoProvider>
    <App />
  </CarrinhoProvider>


)
