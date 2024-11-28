import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart()
  const navigate = useNavigate()

  if (!isCartOpen) return null

  const handleCheckout = () => {
    setIsCartOpen(false)
    navigate('/checkout')
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={() => setIsCartOpen(false)}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
          className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-xl p-6"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Coșul Tău</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-400 text-center py-8">Coșul tău este gol</p>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center py-4 border-b border-gray-800">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 object-cover rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-purple-500">{item.price}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-400 hover:text-white"
                        >
                          -
                        </button>
                        <span className="mx-2 text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-400 hover:text-white"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-4 text-red-500 hover:text-red-600"
                        >
                          Șterge
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-800 pt-6">
                <div className="flex justify-between text-white mb-4">
                  <span>Total:</span>
                  <span className="font-bold">{getCartTotal()} MDL</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-full hover:bg-purple-700 transition-colors duration-200"
                >
                  Finalizează Comanda
                </button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Cart 