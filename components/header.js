import Image from 'next/image'
import { connectWallet } from '../pages/api/web3Bridge'
import style from './header.module.css'

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-4 mx-auto">
      <div className={style.titleWrapper}>
        <Image
          src="/images/logo.png"
          alt="Vercel Logo"
          width={47}
          height={47}
        />
        <span className={style.header_title}>Tanager</span>
      </div>

      <button className={style.connect_button} onClick={connectWallet}>
        Connect Wallet
      </button>
    </nav>
  )
}

export default Header
