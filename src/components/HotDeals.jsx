import React from 'react';

// Reusable StarRating component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Full stars based on integer part
  const remainder = rating % 1; // Remainder for half star

  // Function to generate star SVGs
  const generateStars = (count, isFilled, isHalfFilled) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <svg key={i} className={`h-4 w-4 ${isFilled ? 'text-yellow-500' : 'text-gray-300'} stroke-current stroke-2`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 1l2.6 6.8H19l-5 4.2 1.8 7-5.8-4.4L5.8 18l1.8-7L2 7.8h6.4L10 1z" fill="none"/>
        </svg>
      );
    }

    if (isHalfFilled) {
      stars.push(
        <svg key="half" className="h-4 w-4 text-yellow-500  stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 1l2.6 6.8H19l-5 4.2 1.8 7-5.8-4.4L5.8 18l1.8-7L2 7.8h6.4L10 1z" fill="none"/>
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="flex items-center">
      {generateStars(fullStars, true, remainder >= 0.5)} {/* Filled stars and potentially a half-filled star */}
      {!remainder >= 0.5 && generateStars(5 - fullStars, false, false)} {/* Unfilled stars */}
    </div>
  );
};

const HotDealsPage = () => {
  const hotDeals = [
    {
      image: 'Image (7).png', // Example URL
      name: 'Chinese Cabbage',
      price: '$12.00',
      originalPrice: '$24.00',
      discount: '50%',
      rating: 4.5,
      reviews: '524'
    },
    {
      image: 'Image (7).png', // Example URL
      name: 'Chinese Cabbage',
      price: '$12.00',
      originalPrice: '$24.00',
      discount: '50%',
      rating: 4.5,
      reviews: '524'
    },
    {
      image: 'Image (4).png', // Relative path example
      name: 'Green Lettuce',
      price: '$9.00',
      rating: 4.0
    },
    {
      image: '5.png',
      name: 'Eggplant',
      price: '$34.00',
      rating: 4.5
    },
    {
      image: 'Image (5).png',
      name: 'Fresh Cauliflower',
      price: '$12.00',
      rating: 4.0
    },
    {
      image: '4.png',
      name: 'Green Capsicum',
      price: '$9.00',
      discount: '50%',
      rating: 4.5
    },
    {
      image: 'c.png',
      name: 'Green Chili',
      price: '$34.00',
      rating: 4.0
    },
    {
      image: '6.png',
      name: 'Big Potatoes',
      price: '$12.00',
      rating: 4.0
    },
    {
      image: '7.png',
      name: 'Corn',
      price: '$12.00',
      rating: 4.5
    },
    {
      image: 'b.png',
      name: 'Red Chili',
      price: '$12.00',
      rating: 4.5
    },
    {
      image: 'a.png',
      name: 'Red Tomatoes',
      price: '$9.00',
      originalPrice: '$20.99',
      discount: '50%',
      rating: 4.0
    },
    {
      image: 'Image (8).png',
      name: 'Surajpur Mango',
      price: '$34.00',
      rating: 4.5
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-0 py-8 max-w-screen-lg">
      <h1 className="text-2xl font-bold mb-4">Hot Deals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {hotDeals.map((deal, index) => (
          <div key={index} className={`bg-white shadow-md rounded-md overflow-hidden ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
            <img src={deal.image} alt={deal.name} className={`w-full ${index === 0 ? 'h-20 sm:h-32 md:h-48 lg:h-64 object-cover' : 'h-40 object-cover'}`} />
            <div className="p-4">
              <h2 className="text-lg font-bold">{deal.name}</h2>
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-500 font-bold">{deal.price}</span>
                {deal.originalPrice && (
                  <span className="text-gray-500 line-through">{deal.originalPrice}</span>
                )}
                {deal.discount && (
                  <span className="text-red-500 font-bold">{deal.discount}</span>
                )}
              </div>
              <div className="flex items-center">
                <StarRating rating={deal.rating} /> {/* Render StarRating component */}
                {deal.reviews && (
                  <span className="text-gray-500">({deal.reviews})</span>
                )}
              </div>
              {index === 0 && ( 
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4">
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDealsPage;
