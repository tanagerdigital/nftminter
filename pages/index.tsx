import type { NextPage } from 'next'
import Header from './components/header'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
      </div>
    </div>
  )
}

export default Home
