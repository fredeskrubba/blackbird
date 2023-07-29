import React from 'react'
import headerImage from "public/images/banner-img.jpg"

const Header = () => {
  return (
    <section className={`w-full flex justify-center  font-nunito border-b-4 border-bronze `} style={{backgroundImage: `url(${headerImage.src})` , backgroundSize: "cover"}}>
        <h1 className='text-9xl text-bronze font-caveat  w-full flex justify-center bg-trans-dark m-0 py-44'>Blackbird</h1>
    </section>
  )
}

export default Header