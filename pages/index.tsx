import type { NextPage } from 'next'
import Head from 'next/head'
import GuidePage from '../components/guide'
import Header from '../components/header'
import MintPage from '../components/mint'
import style from './index.module.css'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Tanager Minter</title>
        <meta property="og:title" content="Tanager Mint Page" key="title" />
      </Head>
      <div className={style.header}>
        <Header />
        <main className="main">
          <MintPage />
          <GuidePage />
        </main>
      </div>
    </div>
  )
}

export default Home
