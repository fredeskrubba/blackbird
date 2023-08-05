"use client"
import React from 'react'
import useUserStore from '@/stores/userStore'
import Nav from '@/components/nav/Nav'
import Image from 'next/image'
import editIcon from "../../assets/icons/edit-icon.svg"

const User = () => {
    const user = useUserStore((state) => state.currentUser)
    const logOut = useUserStore((state) => state.logOut)
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
        <article className='flex flex-col gap-8 mx-24 my-8'>
          <div>
            <h2 className='font-semibold italic text-xl mb-4'>Fornavn</h2>
            <article className="flex gap-10">
              <input type="text" placeholder={user.firstName} className='border-2 border-bronze text-bronze placeholder:text-bronze px-4 text-xl font-semibold focus:outline-none'/>
              <Image
                    src={editIcon}
                    alt='edit-icon'
                    width={50}
                    height={50}
                    className='hover:cursor-pointer'
                  />
            </article>
          </div>
          <div>
            <h2 className='font-semibold italic text-xl mb-4'>Efternavn</h2>
            <article className="flex gap-10">
              <input type="text" placeholder={user.lastName} className='border-2 border-bronze text-bronze placeholder:text-bronze px-4 text-xl font-semibold focus:outline-none'/>
              <Image
                    src={editIcon}
                    alt='edit-icon'
                    width={50}
                    height={50}
                    className='hover:cursor-pointer'
                  />
            </article>
          </div>
          <div>
            <h2 className='font-semibold italic text-xl mb-4'>Password</h2>
            <article className="flex gap-10">
              <input type="text" placeholder={user.password} className='border-2 border-bronze text-bronze placeholder:text-bronze px-4 text-xl font-semibold focus:outline-none'/>
              <Image
                    src={editIcon}
                    alt='edit-icon'
                    width={50}
                    height={50}
                    className='hover:cursor-pointer'
                  />
            </article>
          </div>
          <p className='bg-bronze text-3xl font-bold px-8 py-4 text-light w-44 text-center cursor-pointer' onClick={()=> logOut()}>Log Ud</p>
        </article>
    </main>
  )
}

export default User