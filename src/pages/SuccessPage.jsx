import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function SuccessPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-900 pt-28 px-4">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <svg
            className="w-20 h-20 text-green-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
        <h2 className="text-3xl font-bold text-white mb-4">Comandă Finalizată cu Succes!</h2>
        <p className="text-gray-400 mb-8">
          Vă mulțumim pentru comandă. Veți primi un email cu detaliile comenzii.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700"
        >
          Înapoi la Magazin
        </button>
      </div>
    </div>
  )
}

export default SuccessPage 