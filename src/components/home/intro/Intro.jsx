import React from 'react'
import IntroBanner from './IntroBanner'
import image1 from "/public/images/intro-image-1.png"
import image2 from "/public/images/intro-image-2.png"
import image3 from "/public/images/intro-image-3.png"

const Intro = () => {
  return (
    <section className='flex  py-16 flex-col items-center px-40'>
        <h2 className=' border-bronze border-b-4 text-7xl font-semibold p-1 mb-12'>Velkommen til Blackbird!</h2>
        <p className='text-4xl text-center w-3/6'>Tag med på en udforskning af spændende emner og nyttige tips på Blackbird! Fra mode til teknologi, rejser til sundhed - vi dækker det hele. Bliv medlem i dag og få adgang til en verden af viden og inspiration! Oplev vores blog, din ultimative online-destination!</p>
        <IntroBanner
            img={image1.src}
            title="Udtryk dig"
            description="Del dine tanker, idéer og oplevelser med vores engagerede fællesskab. Udforsk forskellige skrivestile, brug billeder, videoer eller endda podcasts for at udtrykke dig på den måde, der passer bedst til dig."
        />
        <IntroBanner
            img={image2.src}
            title="Inspirer dig"
            description="Dyk ned i spændende indlæg, opdag nye perspektiver og få idéer til at forny din kreativitet. Udforsk forskellige emner, læs personlige historier og få et indblik i andres succeser."
            mirror={true}
        />
        <IntroBanner
            img={image3.src}
            title="Udvikl dig"
            description="Gennem vores indsigtsfulde indlæg og ekspertrådgivning kan du opnå værdifulde værktøjer og teknikker til at styrke din vækst. Giv dig selv tilladelse til at træde uden for din komfortzone og udfordre dig selv til at lære og vokse."
        />
    </section>
  )
}

export default Intro