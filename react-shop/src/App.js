import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card"


const arr = [
  {name: 'Мужские боты для бегемота', price: '15 999', image: '/img/shop/1.jpg', id: 1 },
  {name: 'Мужские кроссовки Nike Air Max', price: '12 999', image: '/img/shop/2.jpg', id: 2 },
]


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Drawer/>
      <div className="content">
        <div className="content__inner">
          <h1>Вся обувь</h1>  
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск"/>
          </div>
        </div>

        <div className="cards">
          { arr.map(item => <Card key={item.id} item={item}/>)}
        </div>

      </div>
    </div>
  )
}

export default App;

