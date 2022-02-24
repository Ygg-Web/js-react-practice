import {React, useEffect, useState} from 'react'
import axios from 'axios'
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import Card from "./components/Card"


function App() {
  const [goods, setGoods] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(()=> {
    axios.get('https://621691fa71e7672e5365ea7c.mockapi.io/goods')
    .then(res => setGoods(res.data))
    axios.get('https://621691fa71e7672e5365ea7c.mockapi.io/cart')
    .then(res => setCartItems(res.data))
  }, [])

  const onAddToCart = (item) => {
    axios.post('https://621691fa71e7672e5365ea7c.mockapi.io/cart', item)
    setCartItems(prevState => [...prevState, item])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://621691fa71e7672e5365ea7c.mockapi.io/cart/${id}`)
    setCartItems(prevState => prevState.filter(item => item.id !== id))
  }
  const onChangeSearchInput = (e) => setSearchValue(e.target.value)

  return (
    <div className="wrapper">
      <Header onOpenCart={()=>setCartOpened(true)}/>
      {cartOpened 
      && <Drawer 
          items={cartItems} 
          onClose={()=>setCartOpened(false)}
          onRemove={onRemoveItem}
          />}
      <div className="content">
        <div className="content__inner">
          <h1>{ searchValue ? "Поиск по запросу..." : "Вся обувь"}</h1>  
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
              {searchValue && <img onClick={()=> setSearchValue('')} className="clear" src="/img/btn-remove.svg" alt="Close"/>}
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск"/>
          </div>
        </div>

        <div className="cards">
          { goods.filter(item => item.name.toLowerCase().includes(searchValue)).map(item => (
            <Card 
              key={item.id} 
              item={item} 
              onFavorite={() => console.log('Нажали на лайк')}
              onPlus={onAddToCart}
              
            />)
          )}
        </div>

      </div>
    </div>
  )
}

export default App;

