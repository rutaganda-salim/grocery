import React from 'react';

const HeroSection = () => {
    return (
        <div className="max-w-screen-lg mx-auto py-8 px-4">
            <div className="flex space-x-4">
                <div className="bg-green-500 rounded-lg flex-1 p-6 relative overflow-hidden w-full h-96">
                    <img src="/bannar.png" alt="Fresh food" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-10 flex flex-col justify-center h-full">
                        <h2 className="text-white text-3xl font-bold">Fresh & Healthy Organic Food</h2>
                        <p className="text-white mt-2">Sale up to <span className="text-orange-500 font-bold">30% OFF</span></p>
                        <p className="text-white">Free shipping on all your order.</p>
                        <button className="mt-4 bg-white text-green-500 px-2 py-1 text-sm rounded-3xl w-32 h-10">Shop now →</button> {/* Reduced px-3 to px-2 */}
                    </div>
                </div>

                <div className="flex flex-col space-y-4">

                    <div className="bg-gray-100 rounded-lg p-4 flex-1 relative overflow-hidden w-72">
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/BG (1).png')" }}></div>
                        <div className="relative z-10">
                            <h3 className="text-gray-700">SUMMER SALE</h3>
                            <p className="text-gray-900 text-2xl font-bold">75% OFF</p>
                            <p className="text-gray-700">Only Fruit & Vegetable</p>
                            <button className="mt-2 text-green-500">Shop Now  →</button>
                        </div>
                    </div>
                    <div className="bg-green-700 rounded-lg p-4 flex-1 relative overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/BG.png')" }}></div>
                        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
                            <h3 className="text-white">BEST DEAL</h3>
                            <p className="text-white text-xl font-bold">Special Products</p>
                            <p className="text-white text-xl font-bold"> Deal of the Month</p>
                            <button className="mt-2 text-white" style={{ color: '#00B207' }}>Shop Now →</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around mt-6 bg-white shadow-md p-4 rounded-lg space-x-8 text-xs">
                <div className="flex items-center space-x-2 w-1/4">
                    <img src="/truck.png" alt="Free Shipping" className='w-7' />
                    <div className="flex flex-col space-y-1">
                        <span className="text-gray-700 font-bold">Free Shipping</span>
                        <span className="text-gray-400">Free Shipping On your all order</span>
                    </div>
                </div>

                <div className="flex items-center space-x-2 w-1/4">
                    <img src="/headphones.png" alt="Customer Support" className='w-7' />
                    <div className="flex flex-col space-y-1">
                        <span className="text-gray-700 font-bold">Customer Support 24/7</span>
                        <span className="text-gray-400">Instant access to Support</span>
                    </div>
                </div>

                <div className="flex items-center space-x-2 w-1/4">
                    <img src="/bag.png" alt="Secure Payment" className='w-7' />
                    <div className="flex flex-col space-y-1">
                        <span className="text-gray-700 font-bold">100% Secure Payment</span>
                        <span className="text-gray-400">We ensure your money is safe</span>
                    </div>
                </div>

                <div className="flex items-center space-x-2 w-1/4">
                    <img src="/package.png" alt="Money-Back Guarantee" className='w-7' />
                    <div className="flex flex-col space-y-1">
                        <span className="text-gray-700 font-bold">Money-Back Guarantee</span>
                        <span className="text-gray-400">30 Days Money-Back Guarantee</span>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default HeroSection;
