import Image from 'next/image'
import React from 'react'

const MenuItem = () => {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all'>
      <Image src={'/pizza.png'} width={250} height={250} alt='pizza' />
      <h4 className='font-semibold my-3'>Papperoni Pizza</h4>
      <p className='text-gray-500 text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, tempore.
      </p>
      <button className='bg-primary text-white mt-4 rounded-full px-8 py-2'>
        Add to cart $12
      </button>
    </div>
  )
}

export default MenuItem
