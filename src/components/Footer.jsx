import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <img 
              src="/logo.png" 
              alt="Gear Jersey Logo" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400">Destinația ta principală pentru tricouri de fotbal autentice</p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-6">Link-uri Rapide</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">Acasă</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">Magazin</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">Colecții</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">Despre Noi</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Email: info@gearjersey.com</li>
              <li>Telefon: (+373) 123-456</li>
              <li>Adresa: Str. Ștefan cel Mare 123, Chișinău</li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-6">Urmărește-ne</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500">
            © 2024 Gear Jersey. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 