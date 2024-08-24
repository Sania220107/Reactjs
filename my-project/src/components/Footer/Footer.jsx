import React from 'react';
import Logo from '../../assets/Logo.png';
import Heart from '../../assets/Heart.png';

const Footer = () => {
  return (
    <footer className='py-28'>
      <div className='container'>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-14 md:gap-4 pb-10 space-y-4'>
          {/* first section */}
          <div className='space-y-2 pt-6 max-w-[300px]'>
            <img src={Logo}  />
            <h1 className="text-xl !leading-snug">Build a modern and creative website with crealand</h1>
          </div>
          {/* second section */}
          <div className='grid grid-cols-4 m-10 gap-5'>
            <div className='space-y-4'>
              <h1 className='text-2xl font-bold'>Product</h1>
              <div className='text-dark'>
                <ul className='space-y-3 text-l'>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Landingpage</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Features</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Documenttation</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Referral Program</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Pricing</li>
                </ul>
              </div>
           </div>
          </div>
            <div className="grid grid-cols-4 m-5 gap-5">
            
            <div className='space-y-4'>
              <h1 className='text-2xl font-bold'>Services</h1>
              <div className='text-dark'>
                <ul className='space-y-3 text-l'>
                <li className='cursor-pointer hover: text-secondary duration-200'>Documentation</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Design</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Themes</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Illustrations</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>UI Kit</li>
                </ul>
              </div>
            </div>
          
            </div>
            <div className="grid grid-cols-4 m-5 gap-5">
            <div className='space-y-4'>
              <h1 className='text-2xl font-bold'>Company</h1>
              <div className='text-dark'>
              <ul className='space-y-3 text-l'>
                <li className='cursor-pointer hover: text-secondary duration-200'>About</li>
                <li className='cursor-pointer hover: text-secondary duration-200'>Terms</li>
                <li className='cursor-pointer hover: text-secondary duration-200'>Privacy Policy</li>
                <li className='cursor-pointer hover: text-secondary duration-200'>Careers</li>
              </ul>
              </div>
            </div>
            </div>
            <div className="grid grid-cols-4 m-5 gap-5">
            <div className='space-y-4'>
              <h1 className='text-2xl font-bold'>More</h1>
              <div className='text-dark'>
              <ul className='space-y-3 text-l'>
                <li className='cursor-pointer hover: text-secondary duration-200'>Documentation</li>
                <li className='cursor-pointer hover: text-secondary duration-200'>License</li>
                <li className='cursor-pointer hover: text-secondary duration-200'>Changelog</li>
              </ul>
              </div>
            </div>
          </div>
          <div className="text-center max-w-[600px] mx-auto space-y-4"></div>
        <img className="max-auto hover:scale-300 hover:shadow-secondary duration-300 hover:shadow-2xl" src={Heart} />
        <h1 className='text-l !leading-snug'>Copyright © 2019. Crafted with love.</h1>
      </div>
      </div>
    </footer>
  );
};

export default Footer;