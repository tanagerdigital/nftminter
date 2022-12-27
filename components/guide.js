import style from './guide.module.css'
import Guideline from './guideline'

const steps = [
  {
    title: '1.Where 2 find my NFT',
    desc: 'You will not see it when you successfully minted your NFT on this page. The correct way is to visit opensea（ NFT exchange）and find it under “Your Profile - My Collection.”',
  },
  {
    title: '2. Visit our Github',
    desc: "Visit Tanager's Github, where you can refer to our page's code to develop your Mint NFT web flows",
  },
  {
    title: '3. Read our articles about NFT and marketing',
    desc: 'Since 2022, many traditional big brands and celebrities have issued their own NFTs to engage with their subscribers and fans. However, can NFTs solve their marketing challenges that have been stagnant for years? Could you read our article <xxx > to find out? ',
  },
  {
    title: '4. Get to know Tanager and our Core Developers',
    person: [
      {
        name: '@tanager2022',
        url: 'https://twitter.com/tanager2022',
      },
      {
        name: '@KunLiu_xyz',
        url: 'https://twitter.com/KunLiu_xyz',
      },
      {
        name: '@0xNomadJames',
        url: 'https://twitter.com/0xNomadJames',
      },
    ],
  },
]

const GuidePage = () => {
  return (
    <div className={style.background}>
      {steps.map((step, i) => (
        <Guideline key={i} step={step} />
      ))}
    </div>
  )
}

export default GuidePage
