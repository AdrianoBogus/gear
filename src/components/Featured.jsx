import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Featured() {
  const navigate = useNavigate()

  const collections = [
    {
      id: 1,
      title: "Premier League",
      description: "Cumpără Tricouri Premier League",
      image: "/public/poze (20).jpg",
      link: "#premier-league"
    },
    {
      id: 2,
      title: "La Liga",
      description: "Cumpără Tricouri La Liga",
      image: "/public/poze (41).jpg",
      link: "#la-liga"
    },
    {
      id: 3,
      title: "Champions League",
      description: "Cumpără Tricouri Champions League",
      image: "/public/poze (30).jpg",
      link: "#champions-league"
    }
  ]

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
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer group"
              onClick={() => navigate(collection.link)}
            >
              <div className="h-96 bg-gray-800">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-purple-400 transition-colors">
                      {collection.description}
                    </p>
                    <div className="mt-4 flex items-center text-purple-500 group-hover:text-purple-400">
                      <span className="text-sm font-semibold">Vezi Colecția</span>
                      <svg 
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
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