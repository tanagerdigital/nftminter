import { Link } from '@mui/material'
import Image from 'next/image'
import { format } from 'react-string-format'
import style from './guideline.module.css'

const Person = ({ person }) => {
  function handleClick() {
    window.open(person.url)
  }

  return (
    <div className={style.person} onClick={handleClick}>
      <Image
        src="/nftminter/images/twitter_black.png"
        alt=""
        width="30"
        height="30"
      />
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
  let detail
  if (step.person !== undefined) {
    detail = <Persons persons={step.person} />
  } else if (step.link !== undefined) {
    detail = (
      <div className={style.desc}>
        {format(
          step.desc,
          <span>{step.texts[0]}</span>,
          <Link href={step.link} className={style.link}>
            {step.texts[1]}
          </Link>,
          <span>{step.texts[2]}</span>,
        )}
      </div>
    )
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
