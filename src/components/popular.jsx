import React from 'react';

const categories = [
  { name: "Fresh Fruit", image: "/image 1.png" },
  { name: "Fresh Vegetables", image: "/image 1 (1).png" },
  { name: "Meat & Fish", image: "/image 1 (2).png" },
  { name: "Snacks", image: "image 1 (3).png" },
  { name: "Beverages", image: "image 1 (4).png" },
  { name: "Beauty & Health", image: "image 1 (5).png" },
  { name: "Bread & Bakery", image: "image 1 (11).png" },
  { name: "Baking Needs", image: "image 1 (10).png" },
  { name: "Cooking", image: "image 1 (9).png" },
  { name: "Diabetic Food", image: "image 1 (8).png" },
  { name: "Dish Detergents", image: "image 1 (7).png" },
  { name: "Oil", image: "image 1 (6).png" },
];

const products = [
  { name: "Green Apple", price: "$14.99", oldPrice: "$29.99", image: "Image (1).png", discount: "50%" },
  { name: "Fresh Indian Malta", price: "$20.00", image: "2.png" },
  { name: "Chinese Cabbage", price: "$12.00", image: "3.png" },
  { name: "Green Lettuce", price: "$9.00", image: "Image (4).png" },
  { name: "Eggplant", price: "$34.00", image: "5.png" },
  { name: "Big Potatoes", price: "$20.00", image: "6.png" },
  { name: "Corn", price: "$20.00", image: "7.png" },
  { name: "Fresh Cauliflower", price: "$12.00", image: "Image (5).png" },
  { name: "Green Capsicum", price: "$9.00", oldPrice: "$29.99", image: "4.png", discount: "50%" },
  { name: "Green Chili", price: "$34.00", image: "Image (6).png" },
];

const Popular = () => {
  return (
    <div className="w-full">
      <section className="p-4 border-b border-gray-300 max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
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
            <div key={index} className="border rounded-lg p-4 shadow-md relative">
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Sale {product.discount}
                </span>
              )}
              <img src={product.image} alt={product.name} className="h-20 w-20 mb-2 mx-auto" />
              <h3 className="text-lg font-semibold text-center">{product.name}</h3>
              <div className="flex items-center justify-center mt-2">
                {product.oldPrice && (
                  <span className="text-sm line-through mr-2">{product.oldPrice}</span>
                )}
                <span className="text-xl font-bold">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Popular;
