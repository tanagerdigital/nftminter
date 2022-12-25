import style from './guideline.module.css'
const Guideline = ({ step }) => {
  console.log('guideline: ', step)
  return (
    <div className={style.guideline}>
      <div className={style.title}>{step.title}</div>
      <div className={style.desc}>{step.desc}</div>
    </div>
  )
}

export default Guideline
