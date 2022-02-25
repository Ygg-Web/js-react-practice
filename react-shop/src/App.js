import {React, useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Favorites from './components/Favorites'
import axios from 'axios'
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import Home from './pages/Home'


function App() {
  const [goods, setGoods] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorites, setFavorites] = useState('')
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

  const onAddFavorite = (item) => {
    axios.post('https://621691fa71e7672e5365ea7c.mockapi.io/favorites', item)
    setFavorites(prevState => [...prevState, item])
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

      <Routes>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      <Home/>
      
     
    </div>
  )
}

export default App;

