import { EthereumClient, modalConnectors } from '@web3modal/ethereum'

import { configureChains, createClient } from 'wagmi'

import { polygonMumbai } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

const chains = [polygonMumbai]
// Wagmi client
const { provider } = configureChains(chains, [
  infuraProvider({ apiKey: process.env.infuraId, priority: 0 }),
  publicProvider({ priority: 1 }),
])
const wagmiClient = createClient({
  autoConnect: false,
  connectors: modalConnectors({ appName: 'TanagerMinter', chains }),
  provider,
})

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains)

export { wagmiClient, ethereumClient }
