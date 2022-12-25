import style from './mint.module.css'

const platformUrls = [
  'https://twitter.com/tanager2022',
  'https://twitter.com/tanager2022',
  'https://twitter.com/tanager2022',
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
