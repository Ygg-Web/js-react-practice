export default function Drawer() {
  return (
    <div style={{display: 'none'}} className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
        </h2>

        <div className="cartItems">
          <div className="cartItem">
            <div style={{backgroundImage: "url(/img/shop/1.jpg)"}} className="cartItemImg"></div>
            <div>
              <p>Мужские кроссовки Nike ....</p>
              <b> 14 999 руб.</b>
            </div>
            <img className="removeBtn" width={18} height={18} src="/img/btn-remove.svg" alt="Remove" />  
          </div>
        </div>  

        <div className="cartTotal">
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
          <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="Arrow"/></button>
        </div>
      </div>
    </div>
  )
}