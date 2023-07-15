import React from 'react'
import Link from 'next/link'

const Join = () => {
  return (
    <section className='bg-dark px-24 py-16 flex flex-col items-center'>
        <h2 className='text-bronze text-3xl w-1/2 text-center'>Hvad venter du på? Kom i gang med at dele, udforske og opdage alt  vi har at byde på</h2>
        <article className='flex gap-20 mt-10'>
          <Link href="/create-user"><p className='py-3 px-8 rounded-full text-bronze border-bronze border-2 font-semibold text-2xl w-56 text-center cursor-pointer'>Opret Bruger</p></Link>
          <Link href="log-in"><p className='py-3 px-8 rounded-full text-bronze border-bronze border-2 font-semibold text-2xl w-56 text-center cursor-pointer'>Log Ind</p></Link>
        </article>
    </section>
  )
}

export default Join