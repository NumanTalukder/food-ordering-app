'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const Profile = () => {
  const session = useSession()

  if (session.status === 'loading') {
    return 'Loading...'
  }
  if (session.status === 'unauthenticated') {
    return redirect('/login')
  }

  console.log(session?.data?.user?.image)

  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>Profile</h1>
      <form className='max-w-md mx-auto'>
        <div className='flex gap-2 items-center'>
          <div>
            <div className='relative p-2 rounded-lg'>
              <Image
                src={session?.data?.user?.image}
                width={250}
                height={250}
                alt='Profile Photo'
                className='w-full h-full mb-1'
              />
              <button type='button'>Change</button>
            </div>
          </div>
          <div className='grow'>
            <input type='text' placeholder='Full Name' />
            <input
              type='text'
              value={session?.data?.user?.email}
              disabled={true}
            />
            <button type='submit' className=''>
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Profile
