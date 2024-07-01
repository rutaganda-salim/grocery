import React, { useState, useEffect } from 'react';

// Reusable StarRating component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const remainder = rating % 1;

  const generateStars = (count, isFilled, isHalfFilled) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <svg
          key={i}
          className={`h-4 w-4 ${isFilled ? 'text-yellow-500' : 'text-gray-300'} stroke-current stroke-2`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 1l2.6 6.8H19l-5 4.2 1.8 7-5.8-4.4L5.8 18l1.8-7L2 7.8h6.4L10 1z" fill="none" />
        </svg>
      );
    }

    if (isHalfFilled) {
      stars.push(
        <svg
          key="half"
          className="h-4 w-4 text-yellow-500 stroke-current stroke-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 1l2.6 6.8H19l-5 4.2 1.8 7-5.8-4.4L5.8 18l1.8-7L2 7.8h6.4L10 1z" fill="none" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="flex items-center space-x-1">
      {generateStars(fullStars, true, remainder >= 0.5)}
      {!remainder >= 0.5 && generateStars(5 - fullStars, false, false)}
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mt-4">
      <div className="text-lg font-semibold">Hurry up! Offer ends in:</div>
      <div className="flex justify-center space-x-2">
        <div className="flex flex-col items-center">
          <span className="text-2xl">{timeLeft.days || '00'} : </span>
          <span className="text-sm">DAYS</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">{timeLeft.hours || '00'} : </span>
          <span className="text-sm">HOURS</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">{timeLeft.minutes || '00'} : </span>
          <span className="text-sm">MINS</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">{timeLeft.seconds || '00'}</span>
          <span className="text-sm">SECS</span>
        </div>
      </div>
    </div>
  );
};

const HotDealsPage = () => {
  const [clicked, setClicked] = useState(Array(12).fill(false));

  const handleSvgClick = (index) => {
    const newClicked = [...clicked];
    newClicked[index] = !newClicked[index];
    setClicked(newClicked);
  };

  const hotDeals = [
    {
      image: 'Image (7).png',
      name: 'Chinese Cabbage',
      price: '$12.00',
      originalPrice: '$24.00',
      discount: '50%',
      rating: 4.5,
      reviews: '524',
    },
    {
      image: '3.png',
      name: 'Fresh Indian Malta',
      price: '$16.00',
      originalPrice: '$32.00',
      discount: '50%',
      rating: 5,
    },
    {
      image: 'y.png',
      name: 'Green Lettuce',
      price: '$9.00',
      rating: 4.0,
    },
    {
      image: '5.png',
      name: 'Eggplant',
      price: '$34.00',
      rating: 4.5,
    },
    {
      image: 'Image (5).png',
      name: 'Fresh Cauliflower',
      price: '$12.00',
      rating: 4.0,
    },
    {
      image: '4.png',
      name: 'Green Capsicum',
      price: '$9.00',
      discount: '50%',
      rating: 4.5,
    },
    {
      image: 'c.png',
      name: 'Green Chili',
      price: '$34.00',
      rating: 4.0,
    },
    {
      image: '6.png',
      name: 'Big Potatoes',
      price: '$12.00',
      rating: 4.0,
    },
    {
      image: '7.png',
      name: 'Corn',
      price: '$12.00',
      rating: 4.5,
    },
    {
      image: '2.png',
      name: 'Fresh Malta',
      price: '$16.99',
      rating: 4,
    },
    {
      image: 'b.png',
      name: 'Red Chili',
      price: '$12.00',
      rating: 4.5,
    },
    {
      image: 'a.png',
      name: 'Red Tomatoes',
      price: '$9.00',
      originalPrice: '$20.99',
      discount: '50%',
      rating: 4.0,
    },
    {
      image: 'Image (8).png',
      name: 'Surajpur Mango',
      price: '$34.00',
      rating: 4.5,
    },
  ];

  return (
    <section className='bg-gray-100'>
    <div className="container mx-auto px-4 md:px-0 py-8 max-w-screen-lg">
      <h1 className="text-2xl font-bold mb-4">Hot Deals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {hotDeals.map((deal, index) => (
          <div
            key={index}
            className={`relative bg-white shadow-md rounded-md overflow-hidden transition duration-300 cursor-pointer border border-transparent hover:border-green-500 ${index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
          >
            {deal.discount && (
              <div className="absolute top-4 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                <span>Sale </span>{deal.discount}
              </div>
            )}
            {index === 0 && (
              <div className="absolute top-4 left-24 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded">
                Best Sale
              </div>
            )}
            <img
              src={deal.image}
              alt={deal.name}
              className={`w-full ${index === 0 ? 'h-48 sm:h-64 md:h-96 lg:h-128 object-cover' : 'h-60 object-cover'
                }`}
            />
            <div className={`p-4 ${index === 0 ? 'text-center' : ''}`}>
              <h2 className="text-sm mb-2">{deal.name}</h2>
              <div className={`flex items-center mb-2 ${index === 0 ? 'justify-center' : ''}`}>
                <span className={`text-green-500 font-bold ${index === 0 ? 'text-center' : ''}`}>{deal.price}</span>
                {deal.originalPrice && (
                  <span className={`text-gray-500 line-through ml-2 ${index === 0 ? 'text-center' : ''}`}>{deal.originalPrice}</span>
                )}
              </div>
              <div className={`flex items-center mb-2 ${index === 0 ? 'justify-center' : ''}`}>
                <StarRating rating={deal.rating} />
                {deal.reviews && <span className="text-gray-500 ml-2">({deal.reviews})</span>}
              </div>
              {index !== 0 && (
                <div className="absolute right-2 bottom-10 transform ">
                  <div
                    onClick={() => handleSvgClick(index)}
                    className={`rounded-full p-2 cursor-pointer transition duration-300 ${clicked[index] ? 'bg-[#00B207]' : 'bg-gray-100'
                      } border-1 hover:border-[#00B207]`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={clicked[index] ? '#00B207' : 'none'}
                      strokeWidth="1.5"
                      stroke={clicked[index] ? 'white' : 'currentColor'}
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </div>
                </div>
              )}
              {index === 0 && (
                <>
                  <div className="mb-2 flex justify-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full">
                      Add to Cart
                    </button>
                  </div>
                  <CountdownTimer targetDate={new Date('2024-07-01T00:00:00')} />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default HotDealsPage;
