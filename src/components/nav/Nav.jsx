"use client"
import React from 'react'
import Image from "next/image"
import { useEffect } from 'react'
import menuIcon from "../../assets/icons/menu-icon.svg"
import searchIcon from "../../assets/icons/search-icon.svg"
import profileIcon from "../../assets/icons/profile-icon.svg"
import blogIcon from "../../assets/icons/blog-icon.svg"
import cancelIcon from "../../assets/icons/cancel-icon.svg"
import Link from 'next/link'
import useUserStore from '@/stores/userStore'
import { useState } from 'react'

const Nav = ({home}) => {
    const [colorChange, setColorChange] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const users = useUserStore((state) => state.users)
    const currentUser = useUserStore((state) => state.currentUser)
    const setCurrentUser = useUserStore((state) => state.setCurrentUser)
    const fetchUsers = useUserStore((state) => state.fetchUsers)
    const enteredUsername = useUserStore((state) => state.enteredUsername)
    const setEnteredUsername = useUserStore((state) => state.setEnteredUsername)
    const enteredPassword = useUserStore((state) => state.enteredPassword)
    const setEnteredPassword = useUserStore((state) => state.setEnteredPassword)

    useEffect(()=>{
        fetchUsers("http://localhost:4000/api/getUsers")
    }, [])

    useEffect(() => {
        for (let i = 0; i < users.length; i++) {
            console.log(users[i])
            if (users[i].loggedIn === true){
                console.log(1)
                setCurrentUser(users[i])
            }
        }
    }, [users]);

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
        <nav className={` ${colorChange ? "bg-light shadow-md border-bronze border-b-4" : ""} ${home ? "" : "bg-light shadow-md border-bronze border-b-4" } flex justify-between px-24  fixed w-full m-0 z-10 py-6`}>
            <Image
                src={menuIcon}
                width={50}
                height={50}
                alt="menu-button"
                className='hover:cursor-pointer'
            />
            <div className='flex gap-8'>
            {
                currentUser.loggedIn ? 
                <Link href="/user">
                    <Image
                        src={profileIcon}
                        width={50}
                        height={50}
                        alt="profile-button"
                        className='hover:cursor-pointer'
                    />
                </Link> :
                    <Image
                        src={profileIcon}
                        width={50}
                        height={50}
                        alt="profile-button"
                        className='hover:cursor-pointer'
                        onClick={()=>{setShowLoginModal(true)}}
                    />
                

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
            <article className={` bg-trans-dark fixed right-0 left-0 top-0 bottom-0 py-20 px-80 h-full flex-col justify-between ${showLoginModal ? "flex" : "hidden"}`}>
                <div className='flex flex-col bg-bronze px-10 py-10 items-center justify-between'>
                    <section className='flex flex-col gap-8 w-full'>
                        <div className='flex justify-between items-center'>
                            <article className='flex flex-col gap-4'>
                                <h2 className='text-light font-caveat text-5xl font-bold'>Log in</h2>
                                <div className='p-0.5 bg-light w-28 -rotate-3 z-0'></div>
                            </article>
                            <Image src={cancelIcon} alt='cancel' width={40} height={40} className='hover:cursor-pointer' onClick={()=>{
                                setShowLoginModal(false)

                            }}/>
                        </div>
                        <input type="text" placeholder='Brugernavn' value={enteredUsername} className=' px-5 py-3 text-bronze text-2xl placeholder:text-bronze placeholder:font-semibold focus:outline-none' onChange={(e)=>{setEnteredUsername(e.target.value)}}/>
                        <input type="password" placeholder='Password' value={enteredPassword} className=' px-5 py-3 text-bronze text-2xl placeholder:text-bronze placeholder:font-semibold focus:outline-none' onChange={(e)=>{setEnteredPassword(e.target.value)}}/>

                    </section>
                    <p className=' bg-bronze border-solid border-light border-2 px-6 py-4 mt-12 text-light text-2xl w-1/3 text-center hover:cursor-pointer hover:bg-light hover:text-bronze hover:border-bronze' onClick={()=>{}}>Log in</p>
                </div>
            </article>
        </nav>
    )
}

export default Nav