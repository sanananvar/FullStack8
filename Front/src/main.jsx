import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FavoriteProvider from './Context/FavoriteContext.jsx'
import ProductsProvider from './Context/ProductsContext.jsx'

createRoot(document.getElementById('root')).render(
  <FavoriteProvider>
    <ProductsProvider>
    <App />
    </ProductsProvider>
  </FavoriteProvider>
)
