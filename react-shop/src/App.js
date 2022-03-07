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
    try {
      const [cartsRes, favoritesRes, goodsRes] = await Promise.all([
        axios.get(`${urlBack}/cart`),
        axios.get(`${urlBack}/favorites`),
        axios.get(`${urlBack}/goods`)
      ])

      setIsLoading(false)
      setCartItems(cartsRes.data)
      setFavorites(favoritesRes.data)
      setGoods(goodsRes.data)
    } catch (error) {
      console.error(error)
      alert("Ошибка при запросе данных")
    }
  }
   fetchData()
  }, [])

  const onAddToCart = async (item) => {
   try {
    const findItem = cartItems.find(cartItem => Number(cartItem.parentId) === Number(item.id))
    if(findItem) {
      setCartItems(prevState => prevState.filter(cartItem => Number(cartItem.parentId) !== Number(item.id)))
      await axios.delete(`${urlBack}/cart/${findItem.id}`)
    } else {
      setCartItems(prevState => [...prevState, item])
      const {data} = await axios.post(`${urlBack}/cart`, item)
      setCartItems(prevState => prevState.map(item => {
        if (item.parentId === data.parentId){
          return {
            ...item,
            id: data.id
          }
        }
        return item
      }))
    }
   } catch(error) {
    console.error(error)
    alert("Ошибка при добавлении товара в корзину")
   }
  }

  const onRemoveItem = (id) => {
    try {
       axios.delete(`${urlBack}/cart/${id}`)
      setCartItems(prevState => prevState.filter(item => Number(item.id) !== Number(id))) 
    } catch(error) {
      console.error(error)
      alert("Ошибка при удалении товара из корзины")
    }
  }

  const onAddFavorite = async (item) => {
    try {
      if(favorites.find(favItem => Number(favItem.id) === Number(item.id))) {
        setFavorites(prevState => prevState.filter(favItem => Number(favItem.id) !== Number(item.id)))
        await axios.delete(`${urlBack}/favorites/${item.id}`)
      } else {
        const {data} = await axios.post(`${urlBack}/favorites`, item)
        setFavorites(prevState => [...prevState, data])
      }
    } catch(error) {
      console.error(error)
      alert("Не удалось добавить товар в закладки")    
    }
  }

  const onChangeSearchInput = (e) => setSearchValue(e.target.value)

  const isItemAdded = (id) => cartItems.some(cartItem => Number(cartItem.parentId) === Number(id))
  

  return (
   <AppContext.Provider value={{goods, cartItems, favorites, isItemAdded, onAddFavorite, setCartOpened, setCartItems, urlBack}}>
    <div className="wrapper">
      
      <Header onOpenCart={()=>setCartOpened(true)}/>
      <Drawer 
          items={cartItems} 
          onClose={()=>setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
      />

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

