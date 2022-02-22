
function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина  <img className="removeBtn" width={18} height={18} src="/img/btn.svg" alt="Remove"/>
          </h2>
           

          <div className="cartItems">
            <div className="cartItem">
              <div style={{backgroundImg: "url(/img/1.png"}} className="cartItemImg"></div>
              {/* find img */}
              <div>
                <p>Мужские кроссовки Nike ....</p>
                <b> 14 999 руб.</b>
              </div>
              <img className="removeBtn" width={18} height={18} src="/img/btn.svg" alt="Remove" />  
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



      <header>
      <div className="headerLogo">
        <img width={40} height={40} src="/img/logo.png" alt=" " />
        <div className="headerInfo">
          <h3>React Shop</h3>
          <p>Магазин обуви</p>
        </div>
      </div>
        <ul className="headerBasket">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt=" " />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt=" " />
          </li>
        </ul>
      </header>

      <div className="content">
        <div className="content__inner">
          <h1>Вся обувь</h1>  
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск"/>
          </div>
        </div>


       <div className="cards">
        <div className="card">
              <div className="favorite">
                <img width={133} height={112} src="/img/heart-unliked.svg" alt="Unliked"/>
              </div>
              <div className="cardBottom">
                <div>
                  <span>Цена:</span>
                  <b>15 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/" alt=" "/>
                </button>
              </div>
            </div>

          <div className="card">
            <img width={133} height={112} src="/" alt=" "/>
            <h5>Мужские боты для бегемота</h5>
            <div className="cardBottom">
              <div>
                <span>Цена:</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/" alt=" "/>
              </button>
            </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default App;
