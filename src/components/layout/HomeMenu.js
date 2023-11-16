import Image from 'next/image'
import React from 'react'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'

const HomeMenu = () => {
  return (
    <section className=''>
      <div className='absolute left-0 right-0 w-full justify-start'>
        <div className='absolute left-0 -top-[70px] text-left -z-10'>
          <Image src={'/salad1.png'} width={109} height={189} alt={'salad'} />
        </div>
        <div className='absolute -top-[100px] right-0 -z-10'>
          <Image src={'/salad2.png'} width={107} height={195} alt={'salad'} />
        </div>
      </div>
      <div className='text-center mb-4'>
        <SectionHeaders subHeader={'Chekout'} mainHeader={'Manu'} />
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  )
}

export default HomeMenu
