import React from 'react'
import Image from "next/image"
import menuIcon from "../../assets/icons/menu-icon.svg"
import searchIcon from "../../assets/icons/search-icon.svg"
import profileIcon from "../../assets/icons/profile-icon.svg"
import blogIcon from "../../assets/icons/blog-icon.svg"

const Nav = () => {
  return (
    <nav className='flex justify-between px-24 py-6 bg-trans-dark fixed w-full'>
        <Image
            src={menuIcon}
            width={50}
            height={50}
            alt="menu-button"
            className='hover:cursor-pointer'
        />
        <div className='flex gap-8'>
            <Image
                src={profileIcon}
                width={50}
                height={50}
                alt="profile-button"
                className='hover:cursor-pointer'
            />
            <Image
                src={searchIcon}
                width={50}
                height={50}
                alt="search-button"
                className='hover:cursor-pointer'
            />
            <Image
                src={blogIcon}
                width={50}
                height={50}
                alt="blog-button"
                className='hover:cursor-pointer'
            />
        </div>
    </nav>
  )
}

export default Nav