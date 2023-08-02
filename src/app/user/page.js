"use client"
import React from 'react'
import useUserStore from '@/stores/userStore'
import Nav from '@/components/nav/Nav'

const User = () => {
    const user = useUserStore((state) => state.currentUser)
  return (
    <main>
        <Nav/>
        <article>
          
        </article>
        <h1 className='pt-40'>{`Hej ${user.firstName} ${user.lastName}`}</h1>
    </main>
  )
}

export default User