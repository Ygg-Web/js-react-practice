import Card from "../components/Card"

export default function Home({
    goods,
    searchValue,
    setSearchValue, 
    onAddToCart, 
    onAddFavorite, 
    onChangeSearchInput,
    isLoading
  }) {

    const renderItems = () => {
      const filtredGoods = goods.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      return (isLoading ? [...Array(8)] : filtredGoods) 
        .map((item, index) => (
        <Card 
          key={index} 
          item={item}
          // added={() => isItemAdded(item && item.id)}
          onFavorite={onAddFavorite}
          onPlus={onAddToCart}
          loading={isLoading}
        />)
      )
    }

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
        {renderItems()}
      </div>

    </div>
  );
}
