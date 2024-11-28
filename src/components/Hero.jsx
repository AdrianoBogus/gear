import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover" 
           style={{
             backgroundImage: "url('https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2150879290.jpg?c=16x9&q=h_833,w_1480,c_fill')"
           }}>
        <span className="w-full h-full absolute opacity-70 bg-black"></span>
      </div>
      
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-white font-bold text-6xl">
                RIDICĂ-ȚI JOCUL
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Tricouri de fotbal premium pentru adevărații fani
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-200 mt-8"
              >
                Explorează Colecția
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 