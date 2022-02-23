
import classes from './Card.module.scss'

export default function Card ({item}) {

  const buttonHandler=() => {
    alert(item.name)
  }

  return (
    <div className={classes.card}>
      <div className={classes.favorite}>
        <img src="/img/unliked.svg" alt="Unliked"/>
      </div>
      <img width={133} height={112} src={item.image} alt="shop"/>
      <h5>{item.name}</h5>
      <div className={classes.cardBottom}>
        <div>
          <span>Цена:</span>
          <b>{item.price} руб.</b>
        </div>
        <button className={classes.button} onClick={buttonHandler}>
          <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
        </button>
      </div>
    </div>
  )
}

