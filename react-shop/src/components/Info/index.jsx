import { useContext } from 'react'
import classes from './Info.module.scss'
import AppContext from '../../AppContext'

export default function Info({image, title, description}) {
  const {setCartOpened} = useContext(AppContext)
  return (
    <div className={classes.cartEmpty}>
      <img className={classes.cartEmptyImg} src={image} alt="Empty"/>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={()=>setCartOpened(false)} className={classes.greenButton}>
        <img src="/img/arrow.svg" alt="Arrow"/>
        Вернуться назад
      </button>
    </div>
  )
}

