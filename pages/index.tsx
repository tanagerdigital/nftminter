import type { NextPage } from 'next'
import GuidePage from '../components/guide'
import Header from '../components/header'
import MintPage from '../components/mint'
import style from './index.module.css'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
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
