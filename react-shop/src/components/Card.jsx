
export default function Card () {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="Unliked"/>
      </div>
      <img width={133} height={112} src="/img/shop/1.jpg" alt="shop"/>
      <h5>Мужские боты для бегемота</h5>
      <div className="cardBottom">
        <div>
          <span>Цена:</span>
          <b>15 999 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
        </button>
      </div>
    </div>
  )
}

