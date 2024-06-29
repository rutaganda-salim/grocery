import React from "react";
import { MapPinIcon, HeartIcon, ShoppingBagIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
    return (
        <div className="w-full">
            <div className="border-b border-gray-300">
                <div className="max-w-screen-lg mx-auto px-4 py-2">
                    <div className="flex items-center justify-between pb-2">
                        <div className="flex items-center space-x-2">
                            <MapPinIcon className="w-6 h-10 text-gray-500" />
                            <span className="text-gray-600">
                                State Location: Kigali- 344, Nyarugenge, Nyakabanda, Rwanda
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="flex items-center space-x-1">
                                <span>Eng</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                            <span className="flex items-center space-x-1">
                                <span>USD</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                            <span className="text-gray-600">|</span>
                            <span className="text-gray-600">Sign In / Sign Up</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Leaf_icon_03.svg" alt="Logo" className="w-8 h-8" />
                    <span className="font-bold text-3xl">Ecobazar</span>
                </div>
                <div className="flex-1 px-4">
                    <div className="flex items-center border rounded-lg">
                        <MagnifyingGlassIcon className="w-5 h-5 mx-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 py-2 px-2 focus:outline-none"
                        />
                        <button className="bg-[#00B207] text-white px-4 py-2 rounded">
                            Search
                        </button>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <HeartIcon className="w-6 h-6 text-gray-500" />
                    <span className="text-gray-600">|</span>
                    <div className="flex items-center space-x-2">
                        <ShoppingBagIcon className="w-6 h-6 text-gray-500" />
                        <div className="text-gray-600 text-sm">
                            <span>Shopping cart:</span>
                            <div>$57.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white flex justify-between items-center px-4 py-2 border-b-2 h-16">
                <div className="flex space-x-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-white">Home</a>
                    <a href="#" className="hover:text-white">Shop</a>
                    <a href="#" className="hover:text-white">Pages</a>
                    <a href="#" className="hover:text-white">Blog</a>
                    <a href="#" className="hover:text-white">About Us</a>
                    <a href="#" className="hover:text-white">Contact Us</a>
                </div>
                <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-4 h-4 text-white" />
                    <span>(250) 791-599-759</span>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
