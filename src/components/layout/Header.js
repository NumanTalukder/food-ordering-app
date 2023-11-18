'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Header = () => {
  const session = useSession()
  const status = session?.status
  let username = session?.data?.user?.name || session?.data?.user?.email
  if (username && username.includes(' ')) {
    username = username.split(' ')[0]
  }

  return (
    <header className='flex items-center justify-between'>
      <Link href='' className='text-primary font-semibold text-2xl'>
        PIZZA
      </Link>

      <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
        <Link href={'/'}>Home</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
      </nav>
      {status === 'authenticated' ? (
        <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
          <Link href={'/profile'} className='whitespace-nowrap'>
            Hello, {username}
          </Link>
          <button
            onClick={() => signOut()}
            className='bg-primary text-white px-8 py-2 rounded-full'
          >
            Logout
          </button>
        </nav>
      ) : (
        <nav className='flex items-center gap-4'>
          <Link href={'/login'} className='text-gray-500 font-semibold'>
            Login
          </Link>
          <Link
            href={'/register'}
            className='bg-primary text-white px-8 py-2 rounded-full'
          >
            Register
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
