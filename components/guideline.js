import Image from 'next/image'
import style from './guideline.module.css'

const Person = ({ person }) => {
  return (
    <div className={style.person}>
      <Image src="/images/twitter_black.png" alt="" width="30" height="30" />
      <span>{person.name}</span>
    </div>
  )
}

const Persons = ({ persons }) => {
  return (
    <div className={style.persons}>
      {persons.map((person, i) => (
        <Person key={i} person={person} />
      ))}
    </div>
  )
}

const Desc = ({ desc }) => {
  return <div className={style.desc}>{desc}</div>
}

const Guideline = ({ step }) => {
  console.log('step.person: ', step.person)
  let detail
  if (step.person !== undefined) {
    detail = <Persons persons={step.person} />
  } else {
    detail = <Desc desc={step.desc} />
  }

  return (
    <div className={style.guideline}>
      <div className={style.title}>{step.title}</div>
      {detail}
    </div>
  )
}

export default Guideline
