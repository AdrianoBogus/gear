import { motion } from 'framer-motion'

function Featured() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Colecții Recomandate
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Descoperă colecțiile noastre exclusive de tricouri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Premier League Collection */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-2xl"
          >
            <div className="h-96 bg-gray-800">
              <img
                src="/public/poze (20).jpg"
                alt="Colecția Premier League"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-6 py-6 bg-gradient-to-t from-black via-black/70">
              <h3 className="text-2xl font-bold text-white">Premier League</h3>
              <p className="text-gray-300 mt-2">Cumpără Tricouri Premier League</p>
            </div>
          </motion.div>

          {/* La Liga Collection */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-2xl"
          >
            <div className="h-96 bg-gray-800">
              <img
                src="/public/poze (41).jpg"
                alt="Colecția La Liga"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-6 py-6 bg-gradient-to-t from-black via-black/70">
              <h3 className="text-2xl font-bold text-white">La Liga</h3>
              <p className="text-gray-300 mt-2">Cumpără Tricouri La Liga</p>
            </div>
          </motion.div>

          {/* Champions League Collection */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-2xl"
          >
            <div className="h-96 bg-gray-800">
              <img
                src="/public/poze (30).jpg"
                alt="Colecția Champions League"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-6 py-6 bg-gradient-to-t from-black via-black/70">
              <h3 className="text-2xl font-bold text-white">Champions League</h3>
              <p className="text-gray-300 mt-2">Cumpără Tricouri Champions League</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200"
          >
            Vezi Toate Colecțiile
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Featured 