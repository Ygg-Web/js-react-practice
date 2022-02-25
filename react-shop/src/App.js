import {React, useEffect, useState} from 'react'
import {Routes, Route} from "react-router-dom"
import Favorites from './pages/Favorites'
import axios from 'axios'
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import Home from './pages/Home'


function App() {
  const [goods, setGoods] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const urlBack = 'https://621691fa71e7672e5365ea7c.mockapi.io'

  useEffect(()=> {
    axios.get(`${urlBack}/goods`)
    .then(res => setGoods(res.data))
    axios.get(`${urlBack}/cart`)
    .then(res => setCartItems(res.data))
    axios.get(`${urlBack}/favorites`)
    .then(res => setFavorites(res.data))
  }, [])

  const onAddToCart = (item) => {
    axios.post(`${urlBack}/cart`, item)
    setCartItems(prevState => [...prevState, item])

    // if(cartItems.find(cartItem => cartItem.id === item.id)) {
    //   axios.delete(`${urlBack}/cart/${item.id}`)
    //   setCartItems(prevState => prevState.filter(cartItem => cartItem.id !== item.id))
    // } else {
    //   axios.post(`${urlBack}/cart`, item)
    // setCartItems(prevState => [...prevState, item])
    // }
  }

  const onRemoveItem = (id) => {
    axios.delete(`${urlBack}/cart/${id}`)
    setCartItems(prevState => prevState.filter(item => item.id !== id))
  }

  const onAddFavorite = async (item) => {
    try {
      if(favorites.find(favItem => favItem.id === item.id)) {
        axios.delete(`${urlBack}/favorites/${item.id}`)
        // setFavorites(prevState => prevState.filter(favItem => favItem.id !== item.id))
      } else {
        const {data} = await axios.post(`${urlBack}/favorites`, item)
        setFavorites(prevState => [...prevState, data])
      }
    } catch(error) {
      alert("Не удалось добавить товар в закладки")    
    }
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
        <Route path='/' element={<Home 
          goods={goods} 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          onAddToCart={onAddToCart}
          onAddFavorite={onAddFavorite}
          onChangeSearchInput={onChangeSearchInput}
        />}/>
        <Route path='/favorites' element={<Favorites 
          items={favorites}
          onAddFavorite={onAddFavorite}
        />}/>
      </Routes>
      
    </div>
  )
}

export default App;

