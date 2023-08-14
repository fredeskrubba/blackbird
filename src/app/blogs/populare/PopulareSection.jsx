"use client"
import React from 'react'
import BlogCard from './BlogCard'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arrowIcon from "../../../assets/icons/arrow-icon.svg"
import useBlogStore from "../../../stores/blogStore.js"
import useTagStore from '@/stores/tagStore'
import { useEffect } from 'react'


const PopulareSection = () => {
    const [activeCat, setActiveCat] = useState(1)
    const hotBlogs = useBlogStore((state) => state.hotBlogs)
    const popularTags = useTagStore((state) => state.popularTags)
    const fetchHotBlogs = useBlogStore((state) => state.fetchHotBlogs)
    const fetchPopularTags = useTagStore((state) => state.fetchPopularTags)
    
    useEffect(() => {
        fetchHotBlogs("http://localhost:4000/api/getPopular")
        fetchPopularTags("http://localhost:4000/api/getTags")
    }, [])

  return (
    <section className='pt-40 flex flex-col'>
        <article className='flex flex-col gap-4 px-24'>
            <h2 className='text-bronze font-caveat text-6xl font-bold'>Hot lige nu</h2>
            <div className='p-0.5 bg-bronze w-56 -rotate-3 z-0'></div>
        </article>
        <div className='mt-16 px-24 mb-32 flex flex-col gap-20'>
            {
                hotBlogs.map(({img, tags, title, description, id, author}) => <BlogCard key={id} img={img} tags={tags} headline={title} description={description} author={author}/>)
            }
        </div>
        <article className='flex gap-12 my-12 bg-dark px-24 py-6'>
            {
                popularTags.map(({name, _id}) => <div key={_id} className={`${activeCat === _id ? "bg-bronze text-dark" : "bg-dark text-bronze"} border-2 border-bronze rounded-full px-12 py-2 text-2xl hover:cursor-pointer`} onClick={()=> setActiveCat(_id)}>{name}</div>)
            }
        </article>
        <div className='flex gap-4 border-2 border-bronze py-4 px-8 rounded-full items-center justify-center w-52 self-end mx-24 hover:cursor-pointer'>
            <p className='text-bronze font-semibold text-3xl'>Nyeste</p>
            <Image src={arrowIcon} alt='arrow' width={25} height={25}/>
        </div>
        <div className='mt-16 px-24 flex flex-col gap-20 mb-48'>
            {
                hotBlogs.map(({img, tags, title, description, id, author}) => <BlogCard key={id} img={img} tags={tags} headline={title} description={description} author={author}/>)
            }
        </div>
        <footer className='bg-dark px-56 py-24 flex items-center flex-col gap-20'>
            <h2 className='text-5xl text-center text-bronze font-bold w-1/2 '>Mangler der noget? Lav din egen blogpost!</h2>
            <Link href='/create-blog'><p className='text-5xl font-bold bg-bronze text-dark py-12 px-36'>Kom I gang</p></Link>
        </footer>
    </section>
  )
}

export default PopulareSection