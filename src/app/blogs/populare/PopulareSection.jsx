"use client"
import React from 'react'
import blogImage from "../../../assets/images/blog-image.png"
import BlogCard from './BlogCard'
import { useState } from 'react'

const PopulareSection = () => {
    const [activeCat, setActiveCat] = useState(1)
    const blogs = [
        {
            img: blogImage,
            tags: [
                {
                    id: 1,
                    tag: "Mad"
                },
                {
                    id: 2,
                    tag: "Sommer"
                },
                {
                    id: 3,
                    tag: "Nemt"
                },
            ],
            title: "Ti lækre sommerretter",
            description: "Nu er det sommer så her er mine bedste bud på at gøre hverdagen lidt mere spændende",
            id: 1
        },
        {
            img: blogImage,
            tags: [
                {
                    id: 1,
                    tag: "Mad"
                },
                {
                    id: 2,
                    tag: "Sommer"
                },
                {
                    id: 3,
                    tag: "Nemt"
                },
            ],
            title: "Ti lækre sommerretter",
            description: "Nu er det sommer så her er mine bedste bud på at gøre hverdagen lidt mere spændende",
            id: 2
        }
    ]

    const categories = [
        {
            name: "Rejse",
            id: 1
        },
        {
            name: "Mode",
            id: 2
        },
        {
            name: "Fitness",
            id: 3
        },
        {
            name: "Mad",
            id: 4
        },
        {
            name: "Fotografi",
            id: 5
        },
        {
            name: "Tech",
            id: 6
        },
    ]
  return (
    <section className='pt-52 '>
        <article className='flex flex-col gap-4 px-24'>
            <h2 className='text-bronze font-caveat text-6xl font-bold'>Hot lige nu</h2>
            <div className='p-0.5 bg-bronze w-56 -rotate-3 z-0'></div>
        </article>
        <div className='mt-16 px-24 grid grid-cols-2 gap-60 mb-48'>
            {
                blogs.map(({img, tags, title, description, id}) => <BlogCard key={id} img={img} tags={tags} headline={title} description={description}/>)
            }
        </div>
        <article className='flex gap-12 my-12 bg-dark px-24 py-6'>
            {
                categories.map(({name, id}) => <div key={id} className={`${activeCat === id ? "bg-bronze text-dark" : "bg-dark text-bronze"} border-2 border-bronze rounded-full px-12 py-2 text-2xl hover:cursor-pointer`} onClick={()=> setActiveCat(id)}>{name}</div>)
            }
        </article>
        <div className='mt-16 px-24 grid grid-cols-2 gap-60 mb-48'>
            {
                blogs.map(({img, tags, title, description, id}) => <BlogCard key={id} img={img} tags={tags} headline={title} description={description}/>)
            }
        </div>
        <footer className='bg-dark p-56 flex items-center flex-col gap-28'>
            <h2 className='text-6xl text-center text-bronze font-bold w-1/2 '>Mangler der noget? Lav din egen blogpost!</h2>
            <p className='text-6xl font-bold bg-bronze text-dark py-12 px-36 rounded-full'>Kom I gang</p>
        </footer>
    </section>
  )
}

export default PopulareSection