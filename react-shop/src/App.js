import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card"


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
          <Card/>
        </div>

      </div>
    </div>
  )
}

export default App;
