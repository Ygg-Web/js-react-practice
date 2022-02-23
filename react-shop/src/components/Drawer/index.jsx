
import classes from './Drawer.module.scss'


export default function Drawer() {
  return (
    <div style={{display: 'none'}} className={classes.overlay}>
      <div className={classes.drawer}>
        <h2>
          Корзина
          <img className={classes.removeBtn} src="/img/btn-remove.svg" alt="Remove"/>
        </h2>

        <div className={classes.cartItems}>
          <div className={classes.cartItem}>
            <div style={{backgroundImage: "url(/img/shop/1.jpg)"}} className={classes.cartItemImg}></div>
            <div>
              <p>Мужские кроссовки Nike ....</p>
              <b> 14 999 руб.</b>
            </div>
            <img className={classes.removeBtn} width={18} height={18} src="/img/btn-remove.svg" alt="Remove" />  
          </div>
        </div>  

        <div className={classes.cartTotal}>
          <ul >
            <li>
              <span>Итого:</span>
              <div></div>
              <b>30 999 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>2065 руб.</b>
            </li>
          </ul>
          <button className={classes.greenButton}>Оформить заказ<img src="/img/arrow.svg" alt="Arrow"/></button>
        </div>
      </div>
    </div>
  )
}