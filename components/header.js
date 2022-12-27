import Image from 'next/image'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import style from './header.module.css'

const truncateAddress = (address) => {
  return address.slice(0, 6) + '...' + address.slice(-4)
}

const Header = () => {
  const { address, isConnected } = useAccount()
  const connector = new WalletConnectConnector({
    options: {
      qrcode: true,
    },
  })
  const { connect } = useConnect({
    connector: connector,
  })
  const { disconnect } = useDisconnect()

  function connectWallet() {
    if (isConnected) {
      disconnect()
    } else {
      connect()
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
