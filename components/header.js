import Image from 'next/image'
import { useState } from 'react'
import { connectEthers } from '../pages/api/web3Bridge'
import style from './header.module.css'

const Header = () => {
  const [address, setAddress] = useState('Connect Wallet')
  const [loading, setLoading] = useState(false)

  async function connectWallet() {
    try {
      setLoading(true)
      const address = await connectEthers()
      setAddress(address)
      console.log('set addr: ', address)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="flex justify-between items-center py-4 mx-auto">
      <div className={style.titleWrapper}>
        <Image
          src="/nftminter/images/logo.png"
          alt="Tanager Logo"
          width={47}
          height={47}
        />
        <span className={style.header_title}>Tanager</span>
      </div>

      <button className={style.connect_button} onClick={connectWallet}>
        {address}
      </button>
    </nav>
  )
}

export default Header
