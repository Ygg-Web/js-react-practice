
import {React, useContext, useState} from 'react'
import ContentLoader from "react-content-loader"
import AppContext from '../../AppContext'

import classes from './Card.module.scss'

export default function Card ({
    item, 
    onFavorite, 
    onPlus, 
    favorited = false, 
    loading = false
  }) {

  const {isItemAdded} = useContext(AppContext)
  const [isFavorite, setIsFavorite] = useState(favorited)
  

  const clickPlusHandler = () => {
    onPlus(item)
  }

  const clickLikeHandler = () => {
    onFavorite(item)
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={classes.card}>
    {
      loading ? 
        <ContentLoader 
          speed={2}
          width={160}
          height={230}
          viewBox="0 0 150 230"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="135" /> 
          <rect x="0" y="144" rx="5" ry="5" width="150" height="15" /> 
          <rect x="0" y="170" rx="5" ry="5" width="100" height="15" /> 
          <rect x="0" y="205" rx="5" ry="5" width="80" height="25" /> 
          <rect x="118" y="200" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
        : <>
            <div className={classes.favorite} onClick={clickLikeHandler}>
              <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg" } alt="Unliked"/>
            </div>
            <img width='100%' height={120} src={item.image} alt="Shop"/>
            <h5>{item.name}</h5>
            <div className={classes.cardBottom}>
              <div>
                <span>Цена:</span>
                <b>{item.price} руб.</b>
              </div>
                <img 
                  className={classes.plus}
                  onClick={clickPlusHandler} 
                  src={isItemAdded(item.id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg" }
                  alt="plus"
                />
            </div>
          </>
    }
    </div>
  )
}

