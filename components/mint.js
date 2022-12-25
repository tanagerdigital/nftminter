import style from './mint.module.css'

const MintPage = () => {
  return (
    <div className="corners">
      <div className={style.content}>
        <div className={style.title}>Tanager</div>
        <div className={style.button_wrapper}>
          <div className={`${style.title} ${style.button}`}>
            Mint your 1st NFT
          </div>
        </div>
      </div>
      <div className={`${style.topLeft} ${style.corner_button}`} />
      <div className={`${style.topRight} ${style.corner_button}`} />
      <div className={`${style.bottomLeft} ${style.corner_button}`} />
      <div className={`${style.bottomCenter} ${style.arrow_button}`} />
      <div className={`${style.bottomRight} ${style.corner_button}`} />
    </div>
  )
}

export default MintPage
