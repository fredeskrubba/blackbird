"use client"
import React from 'react'
import Link from 'next/link'
import useUserStore from '@/stores/userStore'

const Join = () => {
  const loggedIn = useUserStore((state) => state.loggedIn)
  const logIn = useUserStore((state) => state.logIn)
  return (
    <section className='bg-dark px-24 py-16 flex flex-col items-center'>
        <h2 className='text-bronze text-3xl w-1/2 text-center'>Hvad venter du på? Kom i gang med at dele, udforske og opdage alt  vi har at byde på</h2>
        {loggedIn ? 
          <article className='flex gap-20 mt-10'>
            <Link href="/create-user"><p className='py-3 px-8 text-bronze border-bronze border-2 font-semibold text-2xl w-56 text-center cursor-pointer hover:bg-bronze hover:text-dark'>Se Blogs</p></Link>
          </article>
        : 
          <article className='flex gap-20 mt-10'>
            <Link href="/create-user"><p className='py-3 px-8 text-bronze border-bronze border-2 font-semibold text-2xl w-56 text-center cursor-pointer hover:bg-bronze hover:text-dark'>Opret Bruger</p></Link>
            <Link href="log-in"><p className='py-3 px-8 text-bronze border-bronze border-2 font-semibold text-2xl w-56 text-center cursor-pointer hover:bg-bronze hover:text-dark'>Log Ind</p></Link>
          </article>
        }
    </section>
  )
}

export default Join