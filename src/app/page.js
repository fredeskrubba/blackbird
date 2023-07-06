import Image from 'next/image'
import Nav from '@/components/nav/Nav'
import Header from '@/components/header/Header'

export default function Home() {
  return (
    <main className="bg-light">
      <Nav/>
      <Header/>
    </main>
  )
}
