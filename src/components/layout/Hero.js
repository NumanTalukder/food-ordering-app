import Image from 'next/image'
import React from 'react'
import Right from '../icons/Right'

const Hero = () => {
  return (
    <section className='hero mt-4'>
      <div className='py-12'>
        <h1 className='text-4xl font-semibold'>
          Everything <br />
          is better
          <br />
          with a <span className='text-primary'>Pizza</span>
        </h1>
        <p className='my-6 text-sm text-gray-500'>
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life.
        </p>

        <div className='flex gap-4 text-sm'>
          <button className='bg-primary flex items-center gap-2 text-white px-8 py-2 rounded-full'>
            Oder Now
            <Right />
          </button>
          <button className='flex border-0 items-center gap-2 py-2 text-gray-600 font-semibold'>
            Learn More <Right />
          </button>
        </div>
      </div>

      <div className='relative'>
        <Image
          src={'/pizza.png'}
          alt='pizza'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </section>
  )
}

export default Hero
