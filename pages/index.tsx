import type { NextPage } from 'next'
import Header from '../components/header'
import MintPage from '../components/mint'
import style from './index.module.css'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <div className={style.header}>
        <Header />
        <MintPage />
        <div>Bottom</div>
      </div>
    </div>
  )
}

export default Home
