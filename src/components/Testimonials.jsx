import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const testimonials = [
    {
      id: 1,
      name: "Alexandru Popescu",
      text: "Calitatea tricourilor este excepțională! Livrare rapidă și serviciu clienți excelent.",
      role: "Cumpărător Verificat",
      location: "Chișinău"
    },
    {
      id: 2,
      name: "Maria Ionescu",
      text: "Mi-am găsit tricoul retro preferat aici. Autenticitatea și atenția la detalii este uimitoare.",
      role: "Cumpărător Verificat",
      location: "Chișinău"
    },
    {
      id: 3,
      name: "Dan Munteanu",
      text: "Cel mai bun loc pentru tricouri autentice. Colecția este impresionantă și prețurile sunt rezonabile.",
      role: "Cumpărător Verificat",
      location: "Chișinău"
    },
    {
      id: 4,
      name: "Sofia Rusu",
      text: "Livrare rapidă și calitatea tricoului a depășit așteptările. Voi cumpăra cu siguranță din nou!",
      role: "Cumpărător Verificat",
      location: "Chișinău"
    },
    {
      id: 5,
      name: "Ion Andrei",
      text: "Selecție excelentă de tricouri clasice și moderne. Ghidul de mărimi a fost foarte util.",
      role: "Cumpărător Verificat",
      location: "Orhei"
    },
    {
      id: 6,
      name: "Lucian Popa",
      text: "Am găsit tricouri rare pe care nu le-am putut găsi în altă parte. Serviciul clienți este de top!",
      role: "Cumpărător Verificat",
      location: "Cahul"
    }
  ]

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12 sm:text-5xl">
          Ce Spun Clienții Noștri
        </h2>
        
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 p-6 rounded-xl shadow-xl h-[250px] flex flex-col justify-between"
              >
                <div>
                  <FaQuoteLeft className="text-purple-500 mb-4 h-6 w-6" />
                  <p className="text-gray-300 text-base italic">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="mt-4 border-t border-gray-800 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-purple-500 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials 