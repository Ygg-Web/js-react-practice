
import {React, useState} from 'react'
import classes from './Card.module.scss'

export default function Card (props) {
  const {item} = props
  const [isAdded, setIsAdded] = useState(false)

  const clickPlusHandler = () => {
    setIsAdded(!isAdded)
  }

  return (
    <div className={classes.card}>
      <div className={classes.favorite} onClick={props.onClickFavorite}>
        <img src="/img/unliked.svg" alt="Unliked"/>
      </div>
      <img width={133} height={112} src={item.image} alt="shop"/>
      <h5>{item.name}</h5>
      <div className={classes.cardBottom}>
        <div>
          <span>Цена:</span>
          <b>{item.price} руб.</b>
        </div>
          <img 
            className={classes.plus}
            onClick={clickPlusHandler} 
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" }
            alt="plus"
          />
      </div>
    </div>
  )
}

