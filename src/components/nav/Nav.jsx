"use client"
import React from 'react'
import Image from "next/image"
import menuIcon from "../../assets/icons/menu-icon.svg"
import searchIcon from "../../assets/icons/search-icon.svg"
import profileIcon from "../../assets/icons/profile-icon.svg"
import blogIcon from "../../assets/icons/blog-icon.svg"
import Link from 'next/link'
import { useState } from 'react'

const Nav = ({home}) => {
    const [colorChange, setColorChange] = useState(false)
    const changeNavbarColor = () => {
        if (window.scrollY >= 300) {
            setColorChange(true);
        }
        else {
            setColorChange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <nav className={` ${colorChange ? "bg-light shadow-md border-bronze border-b-4" : ""} ${home ? "" : "bg-light shadow-md border-bronze border-b-4" } flex justify-between px-24 py-6 fixed w-full m-0 z-10`}>
            <Image
                src={menuIcon}
                width={50}
                height={50}
                alt="menu-button"
                className='hover:cursor-pointer'
            />
            <div className='flex gap-8'>
            <Link href="/profile">
                <Image
                    src={profileIcon}
                    width={50}
                    height={50}
                    alt="profile-button"
                    className='hover:cursor-pointer'
                />
            </Link>
                <Image
                    src={searchIcon}
                    width={50}
                    height={50}
                    alt="search-button"
                    className='hover:cursor-pointer'
                />
                <Link href="/create-blog">
                    <Image
                        src={blogIcon}
                        width={50}
                        height={50}
                        alt="blog-button"
                        className='hover:cursor-pointer'
                    />
                </Link>
            </div>
        </nav>
    )
}

export default Nav