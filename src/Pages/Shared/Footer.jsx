import React from 'react';
import logo from '../../assets/download.png'

const Footer = () => {
  return (
    <footer className="bg-color-four text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex lg:block  items-center mb-4 md:mb-0">
            <img className=" w-16 h-16 lg:w-20 lg:h-20 mr-2" src={logo} alt="Logo" />
            <span className="text-lg lg:text-3xl font-bold">LinguaViva Language Camp</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end">
            <a href="#" className="mr-4 py-2 hover:text-gray-400">Home</a>
            <a href="#" className="mr-4 py-2 hover:text-gray-400">Programs</a>
            <a href="#" className="mr-4 py-2 hover:text-gray-400">About Us</a>
            <a href="#" className="mr-4 py-2 hover:text-gray-400">Contact</a>
          </nav>
        </div>
        <hr className="my-4 border-gray-400" />
        <div className="text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} LinguaViva. All rights reserved.</p>
          <p className="text-sm text-gray-400">Designed and developed by LinguaViva Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
