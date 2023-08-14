import React from 'react'
import Image from 'next/image'

const BlogCard = ({img, tags, headline, description, author}) => {
  return (
    <article className='border-bronze border-4 w-full grid-cols-[1fr,3fr] grid'>
        <Image src={img} alt="blog" width={50} height={100} unoptimized={true} style={{width: '100%', height: "100%", objectFit: "cover"}}/>
        <section className='px-8 py-6 flex flex-col justify-between relative'>
          <article className='pb-32'>
            <h3 className='text-dark font-semibold text-5xl mb-4'>{headline}</h3>
            <p className='text-dark font-normal text-2xl'>{description}</p>
          </article>
          <article className='flex items-center w-full gap-4 justify-end'>
            <p>{`${author.firstName} ${author.lastName}`}</p>
            <Image src={author.profilePic} width={50} height={50} alt='profile-pic'/>
          </article>
          <article className='flex absolute -bottom-6 gap-6'>
            {tags.slice(0,3).map(({tag, key}) => <div key={key} className='text-bronze font-semibold border-4 border-bronze px-6 py-2 text-2xl bg-light'>{tag}</div>)}
          </article>
        </section>
    </article>
  )
}

export default BlogCard