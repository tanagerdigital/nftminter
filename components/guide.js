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
    desc: '{0}{1}{2}',
    texts: [
      'Since 2022, With the launch of several successful NFT-based marketing campaigns, brands are now looking to leverage them to reach a larger and more engaged audience. Could you read our article ',
      "<Issuing NFTs won't be the cure for marketing unless you define the right question first>",
      ' to find out more about the potential of NFTs for marketing? By understanding the advantages and disadvantages of these tokens, you can make an informed decision on whether or not to incorporate NFTs into your marketing strategy.',
    ],
    link: 'https://medium.com/@tanagerdigital/issuing-nfts-wont-be-the-cure-for-marketing-unless-you-define-the-right-question-first-ba5b5b5de081',
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
