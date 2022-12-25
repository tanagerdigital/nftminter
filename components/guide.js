import style from './guide.module.css'
import Guideline from './guideline'

const steps = [
  {
    title: '1.Where 2 find my NFT',
    desc: '当 NFT 显示 mint 成功后，你不会在这个页面看到它。 正确的方式是，访问 OpenSea，在个人资料 - 我的搜集处找到它。',
  },
  {
    title: '2. Visit our Github',
    desc: '访问 Tanager 的 Github ，你可以参考我们页面的代码，自行开发一套 Mint NFT 网页流程。',
  },
  {
    title: '3. Read our articles about NFT and marketing',
    desc: '2022 年开始，很多传统大品牌与名人都开始发行自己的 NFT ，用来与他们的用户与粉丝互动，NFT 真的能解决他们这几年来停滞不前的营销难题吗？阅读我们的文章告诉你答案。',
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
