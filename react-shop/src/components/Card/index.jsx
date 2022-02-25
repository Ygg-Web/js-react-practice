
import {React, useState} from 'react'
import classes from './Card.module.scss'

export default function Card ({item, onFavorite, onPlus, favorited = false}) {
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(favorited)
  

  const clickPlusHandler = () => {
    onPlus(item)
    setIsAdded(!isAdded)
  }

  const clickLikeHandler = () => {
    onFavorite(item)
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={classes.card}>
      <div className={classes.favorite} onClick={clickLikeHandler}>
        <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg" } alt="Unliked"/>
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

