
function App() {
  return (
    <div className="wrapper">
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
        <h1>Вся обувь</h1>

       <div className="cards">
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
