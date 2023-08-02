"use client"
import React from 'react'
import useUserStore from '@/stores/userStore'
import Nav from '@/components/nav/Nav'
import Image from 'next/image'
import editIcon from "../../assets/icons/edit-icon.svg"

const User = () => {
    const user = useUserStore((state) => state.currentUser)
  return (
    <main>
        <Nav/>
        <article className='flex pt-40 mx-24 border-b-4 border-bronze py-4 justify-between items-center'>
        <div className='flex'>
          <h2 className='font-caveat text-bronze text-6xl font-semibold'>{user.userName}</h2>
          <Image
            src={editIcon}
            alt='edit-icon'
            width={30}
            height={30}
            className='relative top-4 left-2 hover:cursor-pointer '
          />
        </div>
        <div className='flex'>
          <Image 
            src={user.profilePic}
            alt="profile-picture"
            height={50}
            width={70}
            className='border-4 border-bronze rounded-full'
          />
          <Image
              src={editIcon}
              alt='edit-icon'
              width={30}
              height={30}
              className='relative right-8 top-8 hover:cursor-pointer'
            />
        </div>
          
        </article>
    </main>
  )
}

export default User