import React from 'react';

// SummerSaleBanner Component
const SummerSaleBanner = () => {
  return (
    <div className="container mt-5 mb-5 mx-auto px-4 md:px-0 py-8 max-w-screen-lg relative flex items-center justify-center bg-cover bg-center rounded-md shadow-md h-64 md:h-96"
      style={{ backgroundImage: 'url(/z.png)' }}>
      <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
      <div className="relative text-white flex flex-col justify-center ml-96  h-full">
        <h2 className="text-lg uppercase text-center mr-16">Summer Sale</h2>
        <h1 className="text-4xl md:text-6xl font-bold mt-2"><span className='text-orange-600'>37%</span> OFF</h1>
        <p className="mt-4 text-sm md:text-base">Free on all your orders, Free Shipping and</p>
        <p className="text-sm md:text-base">30 days money-back guarantee</p>
        <button className="w-52 mt-6 px-6 py-2 bg-green-500 text-white font-bold rounded-full hover:bg-green-700 transition duration-300">
          Shop Now →
        </button>
      </div>
    </div>
  );
};

// FeaturedProducts Component
const FeaturedProducts = () => {
  const products = [
    { image: 'v.png', name: 'Green Apple', price: '$14.99', originalPrice: '$20.99', rating: 4.5, reviews: '524' },
    { image: '2.png', name: 'Fresh Indian Malta', price: '$20.00', rating: 5 },
    { image: '3.png', name: 'Chinese Cabbage', price: '$12.00', rating: 4.5 },
    { image: 'y.png', name: 'Green Lettuce', price: '$9.00', rating: 4.0 },

  ];

  return (
    <div className="container mx-auto px-4 md:px-0 py-8 max-w-screen-lg">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
            {product.discount && (
              <div className="absolute top-4 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
               
              </div>
            )}
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-base">{product.name}</h3>
              <div className="flex items-center mt-2">
                <span className="text-green-500 font-semibold">{product.price}</span>
                {product.originalPrice && <span className="text-gray-500 line-through ml-2">{product.originalPrice}</span>}
              </div>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">{Array(Math.floor(product.rating)).fill('★').join('')}</span>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// LatestNews Component
const LatestNews = () => {
  const newsItems = [
    { image: 'cc.png', date: '18 NOV', title: 'Curabitur porttitor orci eget neque accumsan venenatis.', category: 'Food', author: 'Admin', comments: '65 Comments' },
    { image: 'bb.png', date: '29 JAN', title: 'Eget lobortis lorem. Vivamus pharetra semper.', category: 'Food', author: 'Admin', comments: '65 Comments' },
    { image: 'aa.png', date: '21 FEB', title: 'Maecenas blandit risus elementum mauris malesuada.', category: 'Food', author: 'Admin', comments: '65 Comments' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-0 py-8 max-w-screen-lg">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {newsItems.map((news, index) => (
          <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-gray-300 text-black py-3 px-2 rounded">{news.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <span>{news.category}</span>
                <span className="mx-2">•</span>
                <span>{news.author}</span>
                <span className="mx-2">•</span>
                <span>{news.comments}</span>
              </div>
              <button className="mt-4 text-green-500 font-bold">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// MainPage Component to combine everything
const MainPage = () => {
  return (
    <div>
      <SummerSaleBanner />
      <FeaturedProducts />
      <LatestNews />
    </div>
  );
};

export default MainPage;
