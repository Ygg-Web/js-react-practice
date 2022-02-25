import Card from "../components/Card"

export default function Favorite({items, onAddFavorite}) {
  console.log(items)
  return (
    <div className="content">
      <div className="content__inner">
        <h1>Мои закладки</h1>  
      </div>

      <div className="cards">
        { items.map(item => (
          <Card 
            key={item.id} 
            item={item} 
            favorited={true}
            onFavorite={onAddFavorite}
          />)
        )}
      </div>

    </div>
  );
}
