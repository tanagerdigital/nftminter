import style from './guide.module.css'
import Guideline from './guideline'

const steps = [
  {
    title: '1.Where 2 find my NFT',
    desc: '当你 mint 成功后，你可以在 opensea 上查看',
  },
  {
    title: '2. Visit our Github',
    desc: '在 Tanager Twitter account 上了解这之nft 对你将意味着什么',
  },
  {
    title: '3. Read our articles about NFT and marketing',
    desc: '一段话前沿',
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
