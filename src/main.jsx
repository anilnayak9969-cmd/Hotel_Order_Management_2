// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider }     from './contex/ThemeContext.jsx'
import { CartProvider }      from './contex/CartContext.jsx'
import { AuthProvider }      from './contex/AuthContext.jsx'
import { FavouritesProvider } from './contex/FavouritesContext.jsx'
import { OrderProvider }     from './contex/OrderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <FavouritesProvider>
          <OrderProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </OrderProvider>
        </FavouritesProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)



