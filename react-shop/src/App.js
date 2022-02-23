import {React, useEffect, useState} from 'react'
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import Card from "./components/Card"


function App() {
  const [goods, setGoods] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(()=> {
    fetch('https://621691fa71e7672e5365ea7c.mockapi.io/goods')
    .then(res => res.json())
    .then(json => setGoods(json))
  }, [])

  return (
    <div className="wrapper">
      <Header onOpenCart={()=>setCartOpened(true)}/>
      {cartOpened && <Drawer onClose={()=>setCartOpened(false)}/>}
      <div className="content">
        <div className="content__inner">
          <h1>Вся обувь</h1>  
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск"/>
          </div>
        </div>

        <div className="cards">
          { goods.map(item => (
            <Card 
              key={item.id} 
              item={item} 
              onClickFavorite={() => console.log('Нажали на лайк')}
            />)
          )}
        </div>

      </div>
    </div>
  )
}

export default App;

