import React from 'react';
import { useNavigate } from 'react-router-dom';
import eleco from '../../assets/elec.jpg'
import beauty from '../../assets/beuty.png'
import watch from '../../assets/watch.jpg'
import cloths from '../../assets/ano1.jpg'

export default function Products() {
  const navigate = useNavigate();

  const handleProductClick = (productName: string) => {
    navigate(`/product/${productName.toLowerCase()}`);
  };

  return (
    <div className='absolute flex flex-col items-center justify-center mt-[500px] w-full'>
      <h1 className='text-3xl text-[#471ede] font-quicksand mb-8'>Featured Products</h1>

      {/* Main Box Container for Products */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%]'>

        {/* Product 1 - Electronics */}
        <div 
          className='p-8 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer h-80'
          onClick={() => handleProductClick("Electronics")}
        >
          <img 
            src={eleco}
            alt="Electronics" 
            className='w-full h-56 object-cover mb-4 rounded'
          />
          <h2 className='text-xl font-semibold text-center mb-4'>Electronics Product</h2>
        </div>

        {/* Product 2 - Clothes */}
        <div 
          className='p-8 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer h-80'
          onClick={() => navigate("/Add_cloth")}
        >
          <img 
            src={cloths} 
            alt="Clothes" 
            className='w-full h-56 object-cover mb-4 rounded'
          />
          <h2 className='text-xl font-semibold text-center mb-4'>Clothes Product</h2>
        </div>

        {/* Product 3 - Books */}
        <div 
          className='p-8 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer h-80'
          onClick={() => navigate("/Add")}
        >
          <img 
            src={watch}
            alt="Books" 
            className='w-full h-56 object-cover mb-4 rounded'
          />
          <h2 className='text-xl font-semibold text-center mb-4'>Watch Product</h2>
        </div>

        {/* Product 4 - Cosmetics */}
        <div 
          className='p-8 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer h-80'
          onClick={() => handleProductClick("Cosmetics")}
        >
          <img 
            src={beauty}
            alt="Cosmetics" 
            className='w-full h-56 object-cover mb-4 rounded'
          />
          <h2 className='text-xl font-semibold text-center mb-4'>Cosmetics Product</h2>
        </div>

      </div>
    </div>
  );
}
