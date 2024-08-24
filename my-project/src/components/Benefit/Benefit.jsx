import React from 'react'
import Finance from '../../assets/Finance.png'
import Milk from '../../assets/Milk.png'
import Support from '../../assets/Support.png'
import Secure from '../../assets/Secure.png'
import Mobil from '../../assets/Mobil.png'


const Benefit = () => {
  return (
    <section className='mb-4'>
        <div>
            <h1 className="cloud">Why the Choose us than other?</h1>
        </div>
            <h2 className="cat">Many reasons why customer choose us than other ecommerce. We have some plus point that maybe other can’t have.</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8'>
            <div>
                <img src={Finance}/>
            </div>
            
            <div >
                <div className="inner">
                    <img src={Milk} className='border'/>
                    <h1 className="milk">Have Most Stock</h1>
                    <h1 className="milk-h1">We have many stock until next year to supply your needs.</h1>
                </div>
                <br />
                <div className="inner">
                <img src={Support} className='border'/>
                    <h1 className="milk">24/7 Support</h1>
                    <h1 className="milk-h1">If any problem use our plattform you can contact us free.</h1>
                </div>
                </div>
            <div>
                <div className="inner">
                <img src={Secure} className='border'/>
                    <h1 className="milk">100% Secure</h1>
                    <h1 className="milk-h1">You don’t need to worry when transaction on our plattform now.</h1>
                </div>
                <br />
                <div className="inner">
                <img src={Mobil} className='border'/>
                    <h1 className="milk">Free Delivery</h1>
                    <h1 className="milk-h1">Wherever you are, we make sure you get free delivery service.</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefit