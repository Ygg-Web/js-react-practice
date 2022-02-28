import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AppContext from "../AppContext";
import Card from "../components/Card"

export default function Favorite() {
  const {urlBack} = useContext(AppContext)
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=> {
    (async()=> {
      try{
        const {data} = await axios.get(`${urlBack}/orders`)
        // console.log(data.map(obj => obj.items).flat())
        // console.log(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
      } catch (error) {
        alert('Ошибка! Заказы не загрузились')
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className="content">
      <div className="content__inner">
        <h1>Мои заказы</h1>  
      </div>

      <div className="cards">
        { (isLoading ? [...Array(8)] : orders)
          .map((item, index) => (
          <Card 
            key={index} 
            item={item}
            loading={isLoading} 
          />)
        )}
      </div>

    </div>
  );
}