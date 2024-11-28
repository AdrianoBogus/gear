import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { useCart } from '../context/CartContext'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { getCartCount, setIsCartOpen } = useCart()

  const handleCartOpen = () => {
    setIsCartOpen(true)
    setIsOpen(false) // Close mobile menu when opening cart
  }

  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Gear Jersey Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-200 font-medium">
              Acasă
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-200 font-medium">
              Magazin
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-200 font-medium">
              Colecții
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-200 font-medium">
              Despre
            </a>
            <div className="pl-4 flex items-center">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:text-purple-500 text-gray-300 transition-colors duration-200"
              >
                <FaShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu button and cart */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={handleCartOpen}
              className="relative p-2 hover:text-purple-500 text-gray-300 transition-colors duration-200"
            >
              <FaShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-purple-500 transition-colors duration-200"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#" 
              className="block px-3 py-2 text-gray-300 hover:text-purple-500 transition-colors duration-200 font-medium"
            >
              Acasă
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 text-gray-300 hover:text-purple-500 transition-colors duration-200 font-medium"
            >
              Magazin
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 text-gray-300 hover:text-purple-500 transition-colors duration-200 font-medium"
            >
              Colecții
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 text-gray-300 hover:text-purple-500 transition-colors duration-200 font-medium"
            >
              Despre
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 