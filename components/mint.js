import { ethers } from 'ethers'
import {
  useNetwork,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContractEvent,
} from 'wagmi'
import { tanager101_abi, tanager101_address } from '../pages/api/abi_address'
import style from './mint.module.css'

const platformUrls = [
  'https://testnets.opensea.io/collection/tanager101',
  'https://mirror.xyz/0x2cE37FE0723b15D59Cc3adb843D3f79baec47333',
  'https://github.com/tanagerdigital/nftminter',
  'https://twitter.com/tanager2022',
]

const isBrowser = () => typeof window !== 'undefined'

const MintPage = () => {
  function handleClick(index) {
    console.log('platform', platformUrls[index])
    if (isBrowser()) {
      window.open(platformUrls[index])
    }
  }

  function handleDown() {
    console.log('down')
  }

  const { chain } = useNetwork()
  const { config } = usePrepareContractWrite({
    address: tanager101_address,
    abi: [
      {
        name: 'mint',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [],
        outputs: [],
      },
    ],
    functionName: 'mint',
  })
  const { data, write } = useContractWrite(config)

  const {
    data: transactionReceipt,
    isLoading,
    isSuccess,
  } = useWaitForTransaction({
    hash: data?.hash,
  })

  useContractEvent({
    address: tanager101_address,
    abi: tanager101_abi,
    eventName: 'Transfer',
    listener(node, label, owner) {
      console.log('Transfer event:', node, ', label:', label, ', owner:', owner)
      const index = ethers.utils.formatUnits(owner, 0)
      window.open(
        `https://testnets.opensea.io/assets/mumbai/0x681e419ef87ed964ccd7c3b6425361df23639276/${index}`,
      )
    },
  })

  async function handleMint() {
    console.log('handleMint')
    console.log('chain:', chain)
    if (chain && chain.id !== 80001) {
      alert(
        `Unsupported Chain: ${chain.name}(${chain.id}).Supported ChainID: 80001. Mumbai Test Network.`,
      )
      return
    }
    try {
      console.log('mint:', write)
      write?.()
    } catch (error) {
      console.log('mint error:', error)
      alert(error)
    }
  }

  return (
    <div className="corners">
      <div className={style.content}>
        <div className={style.title}>Tanager</div>
        <div
          className={style.button_wrapper}
          disabled={!write || isLoading}
          onClick={handleMint}
        >
          <div className={`${style.title} ${style.button}`}>
            Mint your 1st NFT
          </div>
        </div>
        <div hidden={!isSuccess}>
          <a href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}>
            Check transaction
          </a>
        </div>
      </div>
      <div
        className={`${style.topLeft} ${style.corner_button}`}
        onClick={() => handleClick(0)}
      />
      <div
        className={`${style.topRight} ${style.corner_button}`}
        onClick={() => handleClick(1)}
      />
      <div
        className={`${style.bottomLeft} ${style.corner_button}`}
        onClick={() => handleClick(2)}
      />
      <div
        className={`${style.bottomCenter} ${style.arrow_button}`}
        onClick={handleDown}
      />
      <div
        className={`${style.bottomRight} ${style.corner_button}`}
        onClick={() => handleClick(3)}
      />
    </div>
  )
}

export default MintPage
