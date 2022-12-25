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
        <meta
          name="twitter:title"
          property="og:title"
          content="Tanager Mint Page"
        />
        <meta name="twitter:site" content="@tanager2022" />
        <meta
          name="description"
          content="2022 年开始，很多传统大品牌与名人都开始发行自己的 NFT ，用来与他们的用户与粉丝互动，NFT 真的能解决他们这几年来停滞不前的营销难题吗？阅读我们的文章告诉你答案。"
        />
        <meta name="viewport" content="initial-scale=1" />
        <meta
          name="twitter:description"
          property="og:description"
          content="2022 年开始，很多传统大品牌与名人都开始发行自己的 NFT ，用来与他们的用户与粉丝互动，NFT 真的能解决他们这几年来停滞不前的营销难题吗？阅读我们的文章告诉你答案。"
        />
        <meta
          name="twitter:image:src"
          property="og:image"
          content="/nftminter/images/logo.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tanagerdigital.github.io/nftminter/"
        />
        <meta name="twitter:card" content="summary_large_image" />
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
