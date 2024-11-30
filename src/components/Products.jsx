import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'

function Products() {
  const { addToCart } = useCart()
  
  const products = [
    {
      id: 1,
      name: "Tricou Barcelona Drake",
      price: "599 MDL",
      image: "/public/drake-barcelona.jpg"
    },
    {
      id: 2,
      name: "Tricou AC Milan Maldini",
      price: "399 MDL",
      image: "/public/s-l1200 (2).jpg"
    },
    {
      id: 3,
      name: "Tricou Barcelona Ronaldinho",
      price: "499 MDL",
      image: "/public/il_570xN.6184404510_6h1o.webp"
    },
    {
      id: 4,
      name: "Tricou Barcelona El Clasico",
      price: "499 MDL", 
      image: "/public/FC-Barcelona-Clasico-Trikot-Motomami-Rosalia.jpg"
    },
    {
      id: 5,
      name: "Tricou Lamine Yamal",
      price: "559 MDL", 
      image: "/public/lamine-yamal.jpeg"
    },
    {
      id: 6,
      name: "Tricou Manchester United",
      price: "559 MDL", 
      image: "/public/man-united.jpg"
    },
    {
      id: 7,
      name: "Tricou Chelsea Palmer",
      price: "799 MDL", 
      image: "/public/poze (12).jpg"
    },
    {
      id: 8,
      name: "Tricou Real Madrid El Clasico",
      price: "399 MDL", 
      image: "/public/viber_image_2024-11-19_19-40-06-619.jpg"
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Cele Mai Noi Tricouri
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Alege din selecția noastră largă de tricouri de fotbal autentice
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl"
            >
              <div className="relative aspect-square bg-gray-800 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => addToCart(product)}
                  className="absolute top-4 right-4 p-3 bg-purple-600 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-700 shadow-lg"
                >
                  <FaShoppingCart className="h-5 w-5" />
                </motion.button>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 truncate">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-purple-500">
                    {product.price}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product)}
                    className="bg-purple-600/10 text-purple-500 px-4 py-2 rounded-full text-sm font-medium
                             hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    Adaugă în Coș
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products 