import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import HomeMenu from '@/components/layout/HomeMenu'
import SectionHeaders from '@/components/layout/SectionHeaders'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className='text-center my-16'>
        <SectionHeaders subHeader={'Our Story'} mainHeader={'About us'} />
        <div className='flex flex-col gap-4 max-w-md mx-auto text-gray-500 mt-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            numquam impedit debitis ducimus repellendus at tenetur dignissimos!
            Assumenda error fuga doloremque, magnam aspernatur illo molestiae
            possimus voluptas dolores fugiat deserunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quidem
            itaque libero sint ipsam. Unde excepturi, sequi, reprehenderit
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quidem
            itaque libero sint ipsam. Unde excepturi, sequi, reprehenderit
          </p>
        </div>
      </section>

      <section className='text-center my-8'>
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={'Contact us'}
        />
        <div className='mt-8'>
          <a href='tel:+880 123 123' className='text-4xl'>
            +880 123 123
          </a>
        </div>
      </section>
      <footer className='border-t p-8 text-center text-gray-500 mt-16'>
        &copy; 2023 All rights reserved
      </footer>
    </>
  )
}
