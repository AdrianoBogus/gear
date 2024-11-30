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
      
      <div className="container relative mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-7/12 px-4 ml-auto mr-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                  RIDICĂ-ȚI 
                  <span className="block bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">
                    JOCUL LA URMĂTORUL NIVEL
                  </span>
                </h1>
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-gray-300 font-light">
                    Tricouri de fotbal premium pentru adevărații fani
                  </p>
                  <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                    Descoperă colecția noastră exclusivă de tricouri autentice de la cele mai mari cluburi din lume
                  </p>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: '#6D28D9' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white font-bold text-lg px-10 py-4 rounded-full 
                           shadow-lg hover:bg-purple-700 transition-all duration-200
                           hover:shadow-purple-500/20 hover:shadow-xl w-full sm:w-auto"
                >
                  Explorează Colecția
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white font-semibold text-lg px-8 py-4 rounded-full 
                           border-2 border-white/20 hover:border-purple-500 hover:text-purple-400 
                           transition-all duration-200 w-full sm:w-auto backdrop-blur-sm"
                >
                  Află Mai Multe
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 