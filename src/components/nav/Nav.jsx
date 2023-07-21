"use client"
import React from 'react'
import Image from "next/image"
import menuIcon from "../../assets/icons/menu-icon.svg"
import searchIcon from "../../assets/icons/search-icon.svg"
import profileIcon from "../../assets/icons/profile-icon.svg"
import blogIcon from "../../assets/icons/blog-icon.svg"
import Link from 'next/link'
import useUserStore from '@/stores/userStore'
import { useState } from 'react'

const Nav = ({home}) => {
    const [colorChange, setColorChange] = useState(false)
    const loggedIn = useUserStore((state) => state.loggedIn)
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
        <nav className={` ${colorChange ? "bg-light shadow-md border-bronze border-b-4" : ""} ${home ? "" : "bg-light shadow-md border-bronze border-b-4" } flex justify-between px-24  fixed w-full m-0 z-10`}>
            <Image
                src={menuIcon}
                width={50}
                height={50}
                alt="menu-button"
                className='hover:cursor-pointer py-6'
            />
            <div className='flex gap-8'>
            {
                loggedIn ? 
                <Link href="/user">
                    <Image
                        src={profileIcon}
                        width={50}
                        height={50}
                        alt="profile-button"
                        className='hover:cursor-pointer'
                    />
                </Link> :
                <Link href="/logIn">
                    <Image
                        src={profileIcon}
                        width={50}
                        height={50}
                        alt="profile-button"
                        className='hover:cursor-pointer'
                    />
                </Link> 

            }
            
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
            <article className='bg-trans-dark fixed right-0 left-0 py-20 px-80 h-full flex flex-col justify-between '>
                <div className='flex flex-col bg-bronze px-10 py-10 items-center rounded-lg justify-between'>
                    <section className='flex flex-col gap-8 w-full'>
                        <article className='flex flex-col gap-4'>
                            <h2 className='text-light font-caveat text-5xl font-bold'>Log in</h2>
                            <div className='p-0.5 bg-light w-28 -rotate-3 z-0'></div>
                        </article>
                        <input type="text" placeholder='Brugernavn' className='rounded-full px-5 py-3 text-bronze text-2xl placeholder:text-bronze placeholder:font-semibold focus:outline-none'/>
                        <input type="text" placeholder='Password' className='rounded-full px-5 py-3 text-bronze text-2xl placeholder:text-bronze placeholder:font-semibold focus:outline-none'/>

                    </section>
                    <p className='rounded-full bg-bronze border-solid border-light border-2 px-6 py-4 mt-12 text-light text-2xl w-1/3 text-center hover:cursor-pointer hover:bg-light hover:text-bronze hover:border-bronze'>Log in</p>
                </div>
            </article>
        </nav>
    )
}

export default Nav