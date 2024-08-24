import React from 'react'
import Delivery from '../../assets/Delivery.png'
import Diskon from '../../assets/Diskon.png'
import Call from '../../assets/Call.png'
import EhyaVersarry from '../../assets/EhyaVersarry.png'
import {motion} from 'framer-motion'

const Promo = () => {
  return (
    <section className='container pb-14 pt-16 mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
      <motion.div
      initial={{x:-50, opacity:0}}
      animate={{x:0,opacity:1}}
      viewport={{once:true}}
      transition={{duration:0.6, delay:0.6}}
      className="bg-[#f4f4f4] rounded-lg pt-6 text-center hover:bg-light hover:scale-60 duration-300 hover:shadow-2xl">
        <p className='text-gray-500'>
        WEEKLY DEALS
        </p>
        <h1 className='text-4xl font-semibold text-gray-800 mb-2'>Free Delivery</h1>
        <a href="#" className="text-custom-blue-light font-bold hover:underline">
        Learn More 
        </a>
        <img src={Delivery} alt="Free Delivery" className="w-full h-auto mt-5" />
      </motion.div>
      <div className="grid grid-rows-2 gap-6">
        <motion.div 
        initial={{x:-50, opacity:0}}
        animate={{x:0,opacity:1}}
        viewport={{once:true}}
        transition={{duration:0.6, delay:0.6}}
        className="bg-[#f4f4f4] rounded-lg pt-6 text-center hover:bg-light hover:scale-60 duration-300 hover:shadow-2xl">
            <div className="m-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                 Disc Up to 25%
              </h3>
              <a href="#" className="text-custom-blue-light font-bold hover:underline">
                Learn More 
              </a>
            </div>
            <div className="text-right m-5">
                <img src={Diskon} alt="Discount Up to 25%" className="max-w-[150px] mb-4 inline-block" />
            </div>
        </motion.div>
        <motion.div
        initial={{x:-50, opacity:0}}
        animate={{x:0,opacity:1}}
        viewport={{once:true}}
        transition={{duration:0.6, delay:0.6}}
        className="bg-[#f4f4f4] rounded-lg pt-6 text-center hover:bg-light hover:scale-60 duration-300 hover:shadow-2xl">
          <div className="text-left m-5">
              <img src={Call} alt="Free 5GB Data" className="max-w-[150px] mb-4 inline-block"/>
          </div>
          <div>
             <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Free 5GB Data
             </h3>
             <a href="#" className="text-custom-blue-light font-bold hover:underline">
              Learn More
             </a>
          </div>
        </motion.div>
      </div>
      <div className="bg-[#f4f4f4] rounded-lg pt-6 text-center hover:bg-light hover:scale-60 duration-300 hover:shadow-2xl">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          EhyaVersarry
          Monthly Deals
        </h1>
        <a href="#" className="text-custom-blue-light font-bold hover:underline">Learn More
        </a>
        <img src={EhyaVersarry} alt="Free Delivery" className="w-full h-auto mt-5" />
      </div>
    </section>
  )
}

export default Promo