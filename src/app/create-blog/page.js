import React from 'react'
import Nav from '@/components/nav/Nav'
import addIcon from "../../assets/icons/add-icon.svg"
import imageIcon from "../../assets/icons/image-icon.svg"
import textIcon from "../../assets/icons/text-icon.svg"
import Image from 'next/image'

const CreateBlog = () => {
  return (
    <main>
        <Nav/>
        <article className='flex flex-col gap-4 px-24 pt-52'>
            <h2 className='text-bronze font-caveat text-6xl font-bold'>Ny Blog</h2>
            <div className='p-0.5 bg-bronze w-44 -rotate-3 z-0'></div>
        </article>
        <article className='mx-24 my-16 border-4 border-bronze p-16'>
            <input type="text" placeholder='Title...' className='border-b-4 border-bronze text-4xl py-2 placeholder:text-bronze placeholder:font-normal '/>
            <section className='border-4 border-bronze my-12 p-4 px-8'>
                <div className='flex justify-between gap-4 border-b-4 border-bronze py-2 items-center'>
                  <div className='flex gap-10 py-4'>
                    <figure className='border-4 border-bronze p-4 rounded-full'>
                      <Image src={textIcon} alt='text-icon' width={25} height={25}/>
                    </figure>
                    <figure className='border-4 p-4 rounded-full'>
                      <Image src={textIcon} alt='text-icon' width={25} height={25}/>
                    </figure>
                    <figure className='border-4 border-bronze p-4 rounded-full'>
                      <Image src={imageIcon} alt='image-icon' width={25} height={25}/>
                    </figure>
                  </div>
                  <select className='border-2 border-bronze w-64 text-bronze text-2xl px-4 h-12 focus:outline-none'>
                    <option value="Lato">Lato</option>
                    <option value="comic sans">Comic Sans</option>
                  </select>
                </div>
                <textarea placeholder='Tekst...' className='w-full mt-12 text-4xl placeholder:text-bronze text-bronze focus:outline-none resize-none h-96'/>
            </section>
            <section>
              <Image src={addIcon} alt='add-icon' width={50} height={50}/>
            </section>
            <div className='flex justify-end'>
              <p className='ml-auto text-bronze border-4 px-16 py-6 text-5xl rounded-full hover:cursor-pointer'>Slå Op</p>
            </div>
        </article>
    </main>
  )
}

export default CreateBlog