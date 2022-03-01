
import { useState, useContext } from 'react'
import classes from './Drawer.module.scss'
import AppContext from '../../AppContext'
import Info from '../Info'
import axios from 'axios'
import { useCart } from '../../hooks/useCart'

export default function Drawer({onClose, onRemove, items=[], opened}) {
  const {urlBack} = useContext(AppContext)
  const [isOrderComppete, setIsOrderComppete] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const {cartItems, setCartItems, totalPrice} = useCart()



  const onClickOrder = async () => {
   try{
    setIsLoading(true)
    const {data} = await axios.post(`${urlBack}/orders`, {items: cartItems})
    setOrderId(data.id)
    setIsOrderComppete(true)
    setCartItems([])

    cartItems.forEach(item => {
      axios.delete(`${urlBack}/cart/${item.id}`)
    })
    
  } catch(error) {
    alert("Ошибка при создании заказа :(")
   }
   setIsLoading(false)
  }

  return (
    <div className={`${classes.overlay} ${opened ? classes.overlayVisible : ''}`}>
      <div className={classes.drawer}>
        <h2>
          Корзина
          <img onClick={onClose} className={classes.removeBtn} src="/img/btn-remove.svg" alt="Remove"/>
        </h2>

        {
          items.length > 0
           ? <>
              <div className={classes.cartItems}>
                  {items.map(item => (
                    <div key={item.id} className={classes.cartItem}>
                      <div style={{backgroundImage: `url(${item.image})`}} className={classes.cartItemImg}></div>
                      <div>
                        <p>{item.name}</p>
                        <b>{item.price} руб.</b>
                      </div>
                      <img onClick={() => onRemove(item.id)} className={classes.removeBtn} src="/img/btn-remove.svg" alt="Remove" />  
                    </div>
                  ))}
              </div> 
                
              <div className={classes.cartTotal}>
                <ul >
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>{totalPrice} руб.</b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>{(totalPrice / 100) * 5} руб.</b>
                  </li>
                </ul>
                <button disabled={isLoading} onClick={onClickOrder} className={classes.greenButton} >
                    Оформить заказ
                  <img src="/img/arrow.svg" alt="Arrow"/>
                </button>
              </div>
            </>

            : <Info 
                image={isOrderComppete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
                title={isOrderComppete ? "Заказ оформлен!" : "Корзина пустая"}
                description={isOrderComppete ? `Ваш заказ №${orderId} начал формироваться` : "Добавьте товар, чтобы оформить заказ"}
            />
        }
      </div>
    </div>
  )
}