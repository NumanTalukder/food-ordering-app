'use client'

import Image from 'next/image'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signingIn, setSigningIn] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSigningIn(true)

    await signIn('credentials', { email, password, callbackUrl: '/' })

    setSigningIn(false)
  }

  return (
    <section>
      <h1 className='text-center text-primary text-4xl mb-4'>Login</h1>

      <form className='block max-w-xs mx-auto' onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={signingIn}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={signingIn}
        />
        <button type='submit' disabled={signingIn}>
          Login
        </button>
        {/* <div className='my-4 text-center text-gray-500'>
          or login with provider
        </div> */}
        <button
          type='button'
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className='flex gap-4 justify-center my-2'
        >
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Login with google
        </button>
        <div className='text-center my-4 text-gray-500 border-t pt-4'>
          Don't have any account?{' '}
          <Link className='underline' href={'/register'}>
            Register here &raquo;
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Login
