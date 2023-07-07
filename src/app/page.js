import Image from 'next/image'
import Nav from '@/components/nav/Nav'
import Header from '@/components/header/Header'
import Intro from '@/components/home-intro/Intro'
export default function Home() {
  return (
    <main className="bg-light font-nunito">
      <Nav/>
      <Header/>
      <Intro/>
    </main>
  )
}
