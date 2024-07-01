import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Subcribe our Newsletter</h2>
            <p className="text-sm mb-4">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
            <div className="flex">
              <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-l-md" />
              <button className="bg-green-500 text-white px-4 py-2 rounded-r-md">Subscribe</button>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Ecobazar</h3>
              <p className="text-sm mb-4">Morbi cursus portitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
              <p className="text-sm">Call us: <span className="font-semibold">(213) 555-0114</span></p>
              <p className="text-sm">Email us: <span className="font-semibold">Proxy@gmail.com</span></p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">My Account</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#">My Account</a></li>
                <li><a href="#">Order History</a></li>
                <li><a href="#">Shopping Cart</a></li>
                <li><a href="#">Wishlist</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Helps</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#">Fruit & Vegetables</a></li>
                <li><a href="#">Meat & Fish</a></li>
                <li><a href="#">Bread & Bakery</a></li>
                <li><a href="#">Beauty & Health</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center border-t border-gray-700 pt-8">
          <p className="text-sm">&copy; Ecobazar eCommerce &copy; 2021. All Rights Reserved</p>
          <div className="flex space-x-4">
            <img src="apple-pay.png" alt="Apple Pay" className="h-6" />
            <img src="visa.png" alt="Visa" className="h-6" />
            <img src="mastercard.png" alt="Mastercard" className="h-6" />
            <img src="discover.png" alt="Discover" className="h-6" />
            <img src="secure-payment.png" alt="Secure Payment" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
