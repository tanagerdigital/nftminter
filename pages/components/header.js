import Image from 'next/image'
import { connectWallet } from '../api/web3Bridge'

const Header = () => {
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        <span className="text-white text-2xl ml-2">NFT Minter</span>
      </div>

      <ul className="md:flex-[0.5] text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li className="mx-4 cursor-pointer">Explore</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>

      <button
        className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2 rounded-full cursor-pointer"
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
    </nav>
  )
}

export default Header
