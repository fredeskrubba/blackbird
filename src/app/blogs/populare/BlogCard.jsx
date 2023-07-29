import React from 'react'
import Image from 'next/image'

const BlogCard = ({img, tags, headline, description}) => {
  return (
    <article className='border-bronze border-4 pb-10 w-full'>
        <Image src={img} alt="blog" width={50} height={500} unoptimized={true} style={{width: '100%'}}/>
        <section className='px-4 py-2'>
          <div className='flex gap-3 my-3'>
              {tags.map(({tag, id})=> <p key={id} className='border-2 rounded-full text-bronze font-bold px-4'>{tag}</p>)}
          </div>
          <h3 className='text-dark font-semibold text-3xl mb-4'>{headline}</h3>
          <p className='text-dark font-normal text-xl'>{description}</p>
        </section>
    </article>
  )
}

export default BlogCard