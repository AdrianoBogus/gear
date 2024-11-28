import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <Cart />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Featured />
                <Products />
                <Testimonials />
              </>
            } />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
