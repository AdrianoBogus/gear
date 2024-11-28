import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500))

    clearCart()
    navigate('/')
  }

  // If cart is empty, redirect to home
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 pt-28 px-4">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Coșul tău este gol</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700"
          >
            Continuă Cumpărăturile
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-28 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Finalizare Comandă</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-gray-800 p-6 rounded-xl h-fit">
            <h2 className="text-xl font-semibold text-white mb-4">Sumar Comandă</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center py-4 border-b border-gray-700">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 object-cover rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-white font-medium">{item.name}</h3>
                    <p className="text-purple-500">{item.price}</p>
                    <p className="text-gray-400">Cantitate: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total:</span>
                <span>{getCartTotal()} MDL</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-6">Detalii Plată</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="email@exemplu.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Adresa de Livrare</label>
                <textarea
                  required
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                  rows="3"
                  placeholder="Introduceți adresa completă"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Număr Card</label>
                <input
                  type="text"
                  required
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Data Expirării</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="LL/AA"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">CVV</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="123"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isProcessing}
                className={`w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-colors duration-200 ${
                  isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isProcessing ? 'Se procesează...' : 'Finalizează Comanda'}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout 