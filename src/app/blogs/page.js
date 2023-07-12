import React from 'react'
import Nav from '@/components/nav/Nav'
import PopulareSection from './populare/PopulareSection'

const Blogs = () => {
  return (
    <main>
      <Nav home={false}/>
      <PopulareSection/>
    </main>
  )
}

export default Blogs