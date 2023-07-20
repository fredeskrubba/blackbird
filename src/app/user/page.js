"use client"
import React from 'react'
import useUserStore from '@/stores/userStore'
import Nav from '@/components/nav/Nav'

const User = () => {
    const userName = useUserStore((state) => state.userName)
  return (
    <main>
        <Nav/>
        <h1 className='pt-40'>Hej {userName}</h1>
    </main>
  )
}

export default User