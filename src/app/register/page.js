'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [creatingUser, setCreatingUser] = useState(false)
  const [createdUser, setCreatedUser] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setCreatingUser(true)

      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({ email, password }),
      })

      setCreatingUser(false)
      setCreatedUser(true)
    } catch (error) {
      console.log(error)
      setError(error)
    }
  }

  return (
    <section>
      <h1 className='text-center text-primary text-4xl mb-4'>Register</h1>

      {createdUser && (
        <div className='my-4 text-center'>
          User created.
          <br />
          Now you can{' '}
          <Link className='underline' href={'/login'}>
            Login &raquo;
          </Link>
        </div>
      )}

      {error && (
        <div className='my-4 text-center'>
          An Error Occured!
          <br />
          Please try again later.
        </div>
      )}

      <form className='block max-w-xs mx-auto' onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={creatingUser}
        />
        <button type='submit' disabled={creatingUser}>
          Register
        </button>
        {/* <div className='my-4 text-center text-gray-500'>
          or login with provider
        </div> */}
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className='flex gap-4 justify-center my-2'
        >
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Login with google
        </button>
        <div className='text-center my-4 text-gray-500 border-t pt-4'>
          Existing account?{' '}
          <Link className='underline' href={'/login'}>
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Register
