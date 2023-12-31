import Nav from '@/components/nav/Nav'
import Header from '@/components/home/header/Header'
import Intro from '@/components/home/intro/Intro'
import Join from '@/components/home/join/Join'
export default function Home() {
  return (
    <main className="bg-light font-nunito">
      <Nav home={true}/>
      <Header/>
      <Intro/>
      <Join/>
    </main>
  )
}
