import style from './mint.module.css'

const MintPage = () => {
  return (
    <div className={style.content}>
      <div className={style.title}>Tanager</div>
      <div className={style.button_wrapper}>
        <div className={`${style.title} ${style.button}`}>
          Mint your 1st NFT
        </div>
      </div>
    </div>
  )
}

export default MintPage
