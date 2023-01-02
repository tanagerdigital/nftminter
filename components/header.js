import Image from 'next/image'
import * as React from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import ConnectorOptionsDialog from './connectorOptionsDialog'
import style from './header.module.css'

const truncateAddress = (address) => {
  return address.slice(0, 6) + '...' + address.slice(-4)
}

const Header = () => {
  const [open, setOpen] = React.useState(false)
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  const handleClose = () => {
    setOpen(false)
  }

  function connectWallet() {
    if (isConnected) {
      disconnect()
      setOpen(false)
    } else {
      setOpen(true)
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
      <ConnectorOptionsDialog open={open} onClose={handleClose} />
    </nav>
  )
}

export default Header
