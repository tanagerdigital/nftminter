import Image from 'next/image'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

import style from './header.module.css'

const truncateAddress = (address) => {
  return address.slice(0, 6) + '...' + address.slice(-4)
}

const Header = () => {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  function connectWallet() {
    if (isConnected) {
      disconnect()
    } else {
      const connector = connectors.pop()
      console.log('connector:', connector)
      connect({ connector })
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
      <button className={style.connect_button} onClick={() => connectWallet()}>
        {isConnected ? truncateAddress(address) : 'Connect Wallet'}
      </button>
    </nav>
  )
}

export default Header
