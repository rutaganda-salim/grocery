import React from 'react';

const InstagramSection = () => {
  return (
    <div className="bg-white py-16 container mx-auto px-4 md:px-0  max-w-screen-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8 space-x-20">
          <img src="steps.png" alt="Steps Logo" className="h-8" />
          <img src="mango-1.png" alt="Mango Logo" className="h-8 mx-4" />
          <img src="Group.png" alt="Food Logo" className="h-8 mx-4" />
          <img src="food.png" alt="Foodie Logo" className="h-8 mx-4" />
          <img src="book.png" alt="Book-off Logo" className="h-8 mx-4" />
          <img src="Vector.png" alt="G Series Logo" className="h-8" />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-6">Follow us on Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <img src="Instagram Post.png" alt="Tomatoes" className="rounded-lg" />
          <img src="Instagram Post (1).png" alt="Leaves" className="rounded-lg" />
          <img src="Instagram Post (3).png" alt="Cucumber" className="rounded-lg" />
          <img src="Instagram Post (5).png" alt="Peppers" className="rounded-lg" />
          <img src="Instagram Post (4).png" alt="Spinach" className="rounded-lg" />
          
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
