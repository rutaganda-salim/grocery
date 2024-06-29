import React, { useState, useEffect } from 'react';

const categories = [
    { name: "Fresh Fruit", image: "/image 1.png" },
    { name: "Fresh Vegetables", image: "/image 1 (1).png" },
    { name: "Meat & Fish", image: "/image 1 (2).png" },
    { name: "Snacks", image: "/image 1 (3).png" },
    { name: "Beverages", image: "/image 1 (4).png" },
    { name: "Beauty & Health", image: "/image 1 (5).png" },
    { name: "Bread & Bakery", image: "/image 1 (11).png" },
    { name: "Baking Needs", image: "/image 1 (10).png" },
    { name: "Cooking", image: "/image 1 (9).png" },
    { name: "Diabetic Food", image: "/image 1 (8).png" },
    { name: "Dish Detergents", image: "/image 1 (7).png" },
    { name: "Oil", image: "/image 1 (6).png" },
];

const products = [
    { name: "Green Apple", price: "$14.99", oldPrice: "$29.99", image: "Image (1).png", discount: "50%", stars: 4 },
    { name: "Fresh Indian Malta", price: "$20.00", image: "2.png", stars: 5 },
    { name: "Chinese Cabbage", price: "$12.00", image: "3.png", stars: 3 },
    { name: "Green Lettuce", price: "$9.00", image: "Image (4).png", stars: 4 },
    { name: "Eggplant", price: "$34.00", image: "5.png", stars: 4 },
    { name: "Big Potatoes", price: "$20.00", image: "6.png", stars: 5 },
    { name: "Corn", price: "$20.00", image: "7.png", stars: 3 },
    { name: "Fresh Cauliflower", price: "$12.00", image: "Image (5).png", stars: 4 },
    { name: "Green Capsicum", price: "$9.00", oldPrice: "$29.99", image: "4.png", discount: "50%", stars: 4 },
    { name: "Green Chili", price: "$34.00", image: "Image (6).png", stars: 5 },
];

const Popular = () => {
    const [clicked, setClicked] = useState(Array(products.length).fill(false));
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 2,
        minutes: 2,
        seconds: 18
    });

    useEffect(() => {
        const countdown = setInterval(() => {
            if (timeLeft.seconds > 0) {
                setTimeLeft((prevState) => ({
                    ...prevState,
                    seconds: prevState.seconds - 1
                }));
            } else {
                if (timeLeft.minutes > 0) {
                    setTimeLeft((prevState) => ({
                        ...prevState,
                        minutes: prevState.minutes - 1,
                        seconds: 59
                    }));
                } else {
                    if (timeLeft.hours > 0) {
                        setTimeLeft((prevState) => ({
                            ...prevState,
                            hours: prevState.hours - 1,
                            minutes: 59,
                            seconds: 59
                        }));
                    } else {
                        if (timeLeft.days > 0) {
                            setTimeLeft((prevState) => ({
                                ...prevState,
                                days: prevState.days - 1,
                                hours: 23,
                                minutes: 59,
                                seconds: 59
                            }));
                        } else {
                            clearInterval(countdown);
                        }
                    }
                }
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [timeLeft]);

    const handleSvgClick = (index) => {
        const newClicked = [...clicked];
        newClicked[index] = !newClicked[index];
        setClicked(newClicked);
    };

    return (
        <div className="w-full">
            <section className="p-4 border-b border-gray-300 max-w-screen-lg mx-auto">
                <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-4 border rounded shadow-md transition duration-300 ease-in-out transform hover:border-green-500 cursor-pointer">
                            <img src={category.image} alt={category.name} className="h-20 w-20 mb-2" />
                            <span className="text-center">{category.name}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className="p-4 max-w-screen-lg mx-auto">
                <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {products.map((product, index) => (
                        <div key={index} className="border rounded p-4 shadow-md relative transition duration-300 ease-in-out transform hover:border-green-500 cursor-pointer text-left align-middle h-52">
                            {product.discount && (
                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                    Sale {product.discount}
                                </span>
                            )}
                            <div className="flex items-center justify-start mb-2">
                                <img src={product.image} alt={product.name} className="h-20 w-20" />
                            </div>
                            <h3 className="text-sm">{product.name}</h3>
                            <div className="flex items-center justify-start mt-1">
                                {product.oldPrice && (
                                    <span className="text-xs line-through mr-2">{product.oldPrice}</span>
                                )}
                                <span className="text-sm font-bold">{product.price}</span>
                            </div>
                            <div className="absolute bottom-2 right-2">
                                <div
                                    onClick={() => handleSvgClick(index)}
                                    className={`rounded-full p-2 cursor-pointer transition duration-300 ${clicked[index] ? 'bg-[#00B207]' : 'bg-gray-100'} border-1`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={clicked[index] ? "#00B207" : "none"}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke={clicked[index] ? "white" : "currentColor"}
                                        className="size-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center justify-start mt-1">
                                {Array.from({ length: 5 }, (_, starIndex) => (
                                    <svg
                                        key={starIndex}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-3 w-3 ${starIndex < product.stars ? 'text-orange-500' : 'text-gray-300'} fill-current`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd" d="M10 0a1 1 0 0 1 .785.37l2.55 3.221a1 1 0 0 0 .63.308l3.899.447a1 1 0 0 1 .555 1.705l-2.825 2.19a1 1 0 0 0-.36.892l.74 3.953a1 1 0 0 1-1.453 1.054L10 13.497a1 1 0 0 0-.99 0l-3.67 1.936a1 1 0 0 1-1.453-1.055l.74-3.952a1 1 0 0 0-.36-.892L1.365 6.25A1 1 0 0 1 1.92 4.545l3.899-.446a1 1 0 0 0 .63-.308L9.214.37A1 1 0 0 1 10 0zM8 13a1 1 0 0 0 .29.707l2.121 2.12-.5-2.668a1 1 0 0 0-.29-.707L10 10.62l-2.121 1.414a1 1 0 0 0-.29.707l-.5 2.667 2.121-2.12A1 1 0 0 0 8 13z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-around mt-8 space-x-4">
                    <div className="rounded-lg p-6 text-center text-white flex flex-col items-center w-80 h-96 relative overflow-hidden">
                        <img src="/13.png" alt="Vegetables" className="absolute inset-0 w-full h-full object-cover " />
                        <div className="relative z-10">
                            <h3 className="font-bold">BEST DEALS</h3>
                            <h2 className="text-2xl font-bold">Sale of the Month</h2>
                            <div className="flex space-x-2 mt-2 text-center items-center justify-center">
                                <span><strong className='text-xl'>{String(timeLeft.days).padStart(2, '0')}</strong> days</span>
                                <span> : </span>
                                <span><strong className='text-xl'>{String(timeLeft.hours).padStart(2, '0')}</strong> hours</span>
                                <span> : </span>
                                <span><strong className='text-xl'>{String(timeLeft.minutes).padStart(2, '0')}</strong> minutes</span>
                                <span> : </span>
                                <span><strong className='text-xl'>{String(timeLeft.seconds).padStart(2, '0')}</strong> seconds</span>
                            </div>
                            <div className="mt-4">
                                <button className="bg-white text-green-500 px-4 py-2 rounded-full">Shop Now →</button>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg p-6 text-center text-white flex flex-col items-center w-80 h-96 relative overflow-hidden">
                        <img src="/11.png" alt="Meat" className="absolute inset-0 w-full h-full object-cover " />
                        <div className="relative z-10">
                            <h3 className="text-green-500">85% FAT FREE</h3>
                            <h2 className="text-2xl font-bold">Low-Fat Meat</h2>
                            <p className="mt-3">Started at <span className="font-bold text-yellow-500">$79.99</span></p>
                            <div className="mt-10">
                                <button className="bg-white text-green-500 px-4 py-2 rounded-full">Shop Now →</button>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg p-6 text-center text-white flex flex-col items-center w-80 h-96 relative overflow-hidden">
                        <img src="/10 (1).png" alt="Fruits" className="absolute inset-0 w-full h-full object-cover " />
                        <div className="relative z-10">
                            <h3 className="text-black">SUMMER SALE</h3>
                            <h2 className="text-2xl font-bold">100% Fresh Fruit</h2>
                            <p className="mt-3">Up to <span className="font-bold">
                                <span className="bg-black text-yellow-500 px-2 py-1 rounded">64% OFF</span>
                            </span></p>
                            <div className="mt-10">
                                <button className="bg-white text-green-500 px-4 py-2 rounded-full">Shop Now →</button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Popular;
