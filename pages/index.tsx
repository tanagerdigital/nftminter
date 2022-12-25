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
        {/* HTML Meta Tags */}
        <title>Tanager Mint Page</title>
        <meta
          name="description"
          content="2022 年开始，很多传统大品牌与名人都开始发行自己的 NFT ，用来与他们的用户与粉丝互动，NFT 真的能解决他们这几年来停滞不前的营销难题吗？阅读我们的文章告诉你答案。"
        />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Tanager Mint Page" />
        <meta
          itemProp="description"
          content="2022 年开始，很多传统大品牌与名人都开始发行自己的 NFT ，用来与他们的用户与粉丝互动，NFT 真的能解决他们这几年来停滞不前的营销难题吗？阅读我们的文章告诉你答案。"
        />
        <meta
          itemProp="image"
          content="https://tanagerdigital.github.io/nftminter/images/logo.png"
        />

        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://tanagerdigital.github.io/nftminter"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tanager Mint Page" />
        <meta
          property="og:description"
          content="2022 年开始，很多传统大品牌与名人都开始发行自己的 NFT ，用来与他们的用户与粉丝互动，NFT 真的能解决他们这几年来停滞不前的营销难题吗？阅读我们的文章告诉你答案。"
        />
        <meta
          property="og:image"
          content="https://tanagerdigital.github.io/nftminter/images/logo.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tanager Mint Page" />
        <meta
          name="twitter:description"
          content="2022 年开始，很多传统大品牌与名人都开始发行自己的 NFT ，用来与他们的用户与粉丝互动，NFT 真的能解决他们这几年来停滞不前的营销难题吗？阅读我们的文章告诉你答案。"
        />
        <meta
          name="twitter:image"
          content="https://tanagerdigital.github.io/nftminter/images/logo.png"
        />
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
