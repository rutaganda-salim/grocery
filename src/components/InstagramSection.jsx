import React from 'react';

const InstagramSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <img src="logo-steps.png" alt="Steps Logo" className="h-12" />
          <img src="logo-mango.png" alt="Mango Logo" className="h-12 mx-4" />
          <img src="logo-food.png" alt="Food Logo" className="h-12 mx-4" />
          <img src="logo-foodie.png" alt="Foodie Logo" className="h-12 mx-4" />
          <img src="logo-book-off.png" alt="Book-off Logo" className="h-12 mx-4" />
          <img src="logo-g-series.png" alt="G Series Logo" className="h-12" />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-6">Follow us on Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <img src="tomatoes.jpg" alt="Tomatoes" className="rounded-lg" />
          <img src="leaves.jpg" alt="Leaves" className="rounded-lg" />
          <img src="cucumber.jpg" alt="Cucumber" className="rounded-lg" />
          <img src="peppers.jpg" alt="Peppers" className="rounded-lg" />
          <img src="spinach.jpg" alt="Spinach" className="rounded-lg" />
          <img src="orange.jpg" alt="Orange" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
