import {React, useEffect, useState} from 'react'
import {Routes, Route} from "react-router-dom"
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'
import axios from 'axios'
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import Home from './pages/Home'
import AppContext from './AppContext'


function App() {
  const urlBack = 'https://621691fa71e7672e5365ea7c.mockapi.io'

  const [goods, setGoods] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=> {
   async function fetchData() {
    const cartsRes = await axios.get(`${urlBack}/cart`)
    const favoritesRes = await axios.get(`${urlBack}/favorites`)
    const goodsRes = await axios.get(`${urlBack}/goods`)
    
    setIsLoading(false)

    setCartItems(cartsRes.data)
    setFavorites(favoritesRes.data)
    setGoods(goodsRes.data)
  }
   fetchData()
  }, [])

  const onAddToCart = (item) => {
   try {
    if(cartItems.find(cartItem => Number(cartItem.id) === Number(item.id))) {
      axios.delete(`${urlBack}/cart/${item.id}`)
      setCartItems(prevState => prevState.filter(cartItem => Number(cartItem.id) !== Number(item.id)))
    } else {
      axios.post(`${urlBack}/cart`, item)
      setCartItems(prevState => [...prevState, item])
    }
   } catch(error) {
    console.log(error)
   }
  }

  const onRemoveItem = (id) => {
    axios.delete(`${urlBack}/cart/${id}`)
    setCartItems(prevState => prevState.filter(item => item.id !== id))
  }

  const onAddFavorite = async (item) => {
    try {
      if(favorites.find(favItem => Number(favItem.id) === Number(item.id))) {
        axios.delete(`${urlBack}/favorites/${item.id}`)
        setFavorites(prevState => prevState.filter(favItem => Number(favItem.id) !== Number(item.id)))
      } else {
        const {data} = await axios.post(`${urlBack}/favorites`, item)
        setFavorites(prevState => [...prevState, data])
      }
    } catch(error) {
      alert("Не удалось добавить товар в закладки")    
    }
  }

  const onChangeSearchInput = (e) => setSearchValue(e.target.value)

  const isItemAdded = (id) => {
    return cartItems.some(cartItem => Number(cartItem.id) === Number(id))
  }

  return (
   <AppContext.Provider value={{goods, cartItems, favorites, isItemAdded, onAddFavorite, setCartOpened, setCartItems, urlBack}}>
    <div className="wrapper">
      
      <Header onOpenCart={()=>setCartOpened(true)}/>
      {cartOpened 
      && <Drawer 
          items={cartItems} 
          onClose={()=>setCartOpened(false)}
          onRemove={onRemoveItem}
      />}

      <Routes>
        <Route path='/' element={
          <Home 
            goods={goods}
            cartItems={cartItems} 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            onAddToCart={onAddToCart}
            onAddFavorite={onAddFavorite}
            onChangeSearchInput={onChangeSearchInput}
            isLoading={isLoading}
        />}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      
    </div>
   </AppContext.Provider>
  )
}

export default App;

