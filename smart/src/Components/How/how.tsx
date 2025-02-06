import React from 'react';
import { useNavigate} from "react-router-dom" 
import eleco from '../../assets/elec.jpg'
import beauty from '../../assets/beuty.png'
import watch from '../../assets/watch.jpg'
import cloths from '../../assets/ano1.jpg'

export default function How() {
    const navigate = useNavigate()
  return (
    <div className='absolute flex flex-col items-center justify-center mt-[80px] w-full'>
      <h1 className='text-3xl text-[#471ede] font-quicksand mb-8'>Featured Categories</h1>
      
      {/* Main Box Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[80%]'>
        
        {/* Electronics */}
        <div className='p-8 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
          <img 
            src={eleco} 
            alt="Electronics" 
            className='w-full h-40 object-cover mb-4 rounded'
          />
          <h2 className='text-xl font-semibold text-center mb-4'>Electronics</h2>
          <p className='text-center text-gray-500'>Explore the latest gadgets and tech products.</p>
        </div>
        
        {/* Clothes */}
        <div className='p-8 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
          <img 
            src={cloths}
            alt="Clothes" 
            className='w-full h-40 object-cover mb-4 rounded'
          />
          <h2 className='text-xl font-semibold text-center mb-4'>Clothes</h2>
          <p className='text-center text-gray-500'>Find the latest trends in fashion.</p>
        </div>
        
        {/* Books */}
        <div className='p-8 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
          <img 
            src="https://via.placeholder.com/150?text=Books" 
            alt="Books" 
            className='w-full h-40 object-cover mb-4 rounded'
          />
          <h2 className='text-xl font-semibold text-center mb-4'>Books</h2>
          <p className='text-center text-gray-500'>Discover bestsellers and new releases.</p>
        </div>
        
        {/* Cosmetics */}
        <div className='p-8 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
          <img 
            src={beauty}
            alt="Cosmetics" 
            className='w-full h-40 object-cover mb-4 rounded'
          />
          <h2 className='text-xl font-semibold text-center mb-4'>Cosmetics</h2>
          <p className='text-center text-gray-500'>Shop the latest beauty products.</p>
        </div>
        
      </div>
    </div>
  );
}
