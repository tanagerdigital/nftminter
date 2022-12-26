import { ethers } from 'ethers'
import { tanager101_abi, tanager101_address } from './abi_address.js'

var signer_addr = null
var signer = null
var tanager101 = null

async function start() {
  console.log('start ethers')
  if (window.ethereum) {
    window.ethers = ethers
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    signer = provider.getSigner()

    //check the chain id
    // $('#network').html((await provider.getNetwork()).name)

    //set signer address & network
    window.signer = signer
    signer_addr = await signer.getAddress()
    // $('#account').html(signer_addr)
    console.log('signer address', signer_addr)

    //load contract
    tanager101 = new ethers.Contract(
      tanager101_address,
      tanager101_abi,
      provider,
    )
    window.tanager101 = tanager101
  } else {
    alert('Please connect to Metamask.')
  }
}

//获得目前已经铸造的NFT个数
async function getTotalSupply() {
  const total_supply = (await tanager101.totalSupply()).toString()
  return total_supply
}

async function mint() {
  await tanager101.connect(signer).mint()
}

//获取余额
async function getBalance() {
  const balance = await signer.provider.getBalance(await signer.getAddress())
  return ethers.utils.formatEther(balance)
}

async function connectEthers() {
  console.log('connect wallet')
  await start()
  return signer_addr
}

export { connectEthers, getTotalSupply, mint, getBalance }
