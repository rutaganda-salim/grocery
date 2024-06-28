import React from "react";
import { MapPinIcon } from '@heroicons/react/24/outline';

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
        </div>
    );
}

export default Navigation;
