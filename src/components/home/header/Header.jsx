import React from 'react'
import headerImage from "../../../assets/images/banner-img.jpg"

const Header = () => {
  return (
    <section className={`w-full flex justify-center py-48 font-nunito`} style={{backgroundImage: `url(${headerImage.src})` , backgroundSize: "cover"}}>
        <h1 className='text-9xl text-bronze font-caveat'>Blackbird</h1>
    </section>
  )
}

export default Header