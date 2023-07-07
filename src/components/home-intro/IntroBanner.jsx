import React from 'react'
import Image from 'next/image'


const IntroBanner = ({title, description, img, mirror}) => {
  return (
    
    <article className={`flex grid-cols-2 gap-24 my-24`}>
        {
            mirror ? 
        <>
            <section className='border-bronze border-b-8'>
                <div className='flex items-center gap-12'>
                    <div className='p-1 bg-bronze w-full'/>
                    <h3 className='text-bronze font-semibold text-4xl text-center whitespace-nowrap'>{title}</h3>
                    <div className='p-1 bg-bronze w-full h-1/2'/>
                </div>
                <p className='text-2xl mt-4'>{description}</p>
            </section>
            <Image
                src={img}
                width={800}
                height={800}
                alt='banner'
            />
        </> :
        <>
            <Image
                src={img}
                width={800}
                height={800}
                alt='banner'
            />
            <section className='border-bronze border-b-8'>
                <div className='flex items-center gap-12'>
                    <div className='p-1 bg-bronze w-full'/>
                    <h3 className='text-bronze font-semibold text-4xl text-center whitespace-nowrap'>{title}</h3>
                    <div className='p-1 bg-bronze w-full h-1/2'/>
                </div>
                <p className='text-2xl mt-4'>{description}</p>
            </section>
        </> 
        }
    </article>
  )
}

export default IntroBanner