import Head from 'next/head'
import AdviceCard from '../components/AdviceCard'

export default function Home() {
  return (
    <>
    <Head>
      <title>NextJS Movie App with Tailwind</title>
      <meta property="og:title" content="NextJS Advice App with Tailwind" key="title" />
      <meta property="og:description" content="NextJS Advice App with Tailwind deployed on Vercel" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AdviceCard />
    </>
  )
}
