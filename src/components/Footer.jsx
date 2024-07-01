import React from 'react';

import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-white">Subscribe to our Newsletter</h2>
            <p className="text-sm mb-4">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
            <div className="flex">
              <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-l-md" />
              <button className="bg-green-500 text-white px-4 py-2 rounded-r-md">Subscribe</button>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook"><FaFacebookF className="text-white h-6 w-6" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="text-white h-6 w-6" /></a>
            <a href="#" aria-label="Pinterest"><FaPinterest className="text-white h-6 w-6" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="text-white h-6 w-6" /></a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Ecobazar</h3>
              <p className="text-sm mb-4">Morbi cursus portitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
              <p className="text-sm">Call us: <span className="font-semibold text-white">(250) 791-599-759</span></p>
              <p className="text-sm">Email us: <span className="font-semibold text-white">Erisabar@gmail.com</span></p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">My Account</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className='hover:text-white'>My Account</a></li>
                <li><a href="#" className='hover:text-white'>Order History</a></li>
                <li><a href="#" className='hover:text-white'>Shopping Cart</a></li>
                <li><a href="#" className='hover:text-white'>Wishlist</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Helps</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className='hover:text-white'>Contact</a></li>
                <li><a href="#" className='hover:text-white'>FAQs</a></li>
                <li><a href="#" className='hover:text-white'>Terms & Conditions</a></li>
                <li><a href="#" className='hover:text-white'>Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className='hover:text-white'>Fruit & Vegetables</a></li>
                <li><a href="#" className='hover:text-white'>Meat & Fish</a></li>
                <li><a href="#" className='hover:text-white'>Bread & Bakery</a></li>
                <li><a href="#" className='hover:text-white'>Beauty & Health</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center border-t border-gray-700 pt-8">
          <p className="text-sm">&copy; Ecobazar eCommerce &copy; 2024. All Rights Reserved</p>
          <div className="flex space-x-4">
            <img src="pay.png" alt="Apple Pay" className="h-6" />
            <img src="visa.png" alt="Visa" className="h-6" />
            <img src="card.png" alt="Mastercard" className="h-6" />
            <img src="disc.png" alt="Discover" className="h-6" />
            <img src="secure.png" alt="Secure Payment" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
