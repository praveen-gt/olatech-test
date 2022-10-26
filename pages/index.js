import Head from 'next/head'
// import Image from 'next/image'
import Hero from '../Components/Hero'
import Navbar from './navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>OlaTech</title>
        <meta name="description" content="olatech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      

    </div>
  )
}
