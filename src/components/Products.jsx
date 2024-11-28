import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

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
              whileHover={{ scale: 1.05 }}
              className="group relative bg-gray-800 rounded-xl overflow-hidden h-[450px] flex flex-col"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[350px] object-cover object-center group-hover:opacity-75 transition-opacity duration-200"
                />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-medium text-white">{product.name}</h3>
                  <p className="mt-1 text-lg font-semibold text-purple-500">{product.price}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(product)}
                  className="mt-4 p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200 w-full flex items-center justify-center space-x-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Adaugă în Coș</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products 