import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

function CheckoutPage() {
  const { cart, getCartTotal, clearCart, updateQuantity, removeFromCart } = useCart()
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    phone: '',
    city: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      clearCart()
      navigate('/success')
    } catch (error) {
      console.error('Error processing order:', error)
    } finally {
      setIsProcessing(false)
    }
  }

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
    <div className="min-h-screen bg-gray-900 pt-28 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Finalizare Comandă</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Updated Order Summary */}
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <span>Sumar Comandă</span>
                  <span className="ml-2 text-sm text-gray-400">
                    ({cart.length} {cart.length === 1 ? 'produs' : 'produse'})
                  </span>
                </h2>
                <button
                  onClick={clearCart}
                  className="flex items-center text-red-500 hover:text-red-600 text-sm"
                >
                  <FaTrash className="h-4 w-4 mr-2" />
                  Golește Coșul
                </button>
              </div>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center py-4 border-b border-gray-700 last:border-b-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 object-cover rounded-lg"
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-white font-medium">{item.name}</h3>
                        <p className="text-purple-500 font-semibold">{item.price}</p>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-gray-400 hover:text-white transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <FaMinus size={12} />
                          </button>
                          <span className="text-white w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-gray-400 hover:text-white transition-colors"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          <FaTrash size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Details */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Detalii Comandă</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>{getCartTotal()} MDL</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Livrare</span>
                  <span>Gratuită</span>
                </div>
                <div className="pt-3 border-t border-gray-700">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span>{getCartTotal()} MDL</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">* TVA inclus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Checkout Form */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-6">Informații Personale</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Nume Complet</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Adresa de Livrare</label>
                <textarea
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Oraș</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Informații Card</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Număr Card</label>
                    <input
                      type="text"
                      name="cardNumber"
                      required
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Data Expirării</label>
                      <input
                        type="text"
                        name="expiryDate"
                        required
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        required
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                        placeholder="123"
                      />
                    </div>
                  </div>
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

export default CheckoutPage 