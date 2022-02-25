import Card from "../components/Card"

export default function Home() {
  return (
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
            onFavorite={onAddFavorite}
            onPlus={onAddToCart}
          />)
        )}
      </div>

    </div>
  );
}
