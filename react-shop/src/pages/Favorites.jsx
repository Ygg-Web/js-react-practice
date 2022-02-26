import {useContext} from 'react'
import Card from "../components/Card"
import AppContext from '../AppContext';


export default function Favorite() {
  const {favorites, onAddFavorite } = useContext(AppContext)

  return (
    <div className="content">
      <div className="content__inner">
        <h1>Мои закладки</h1>  
      </div>

      <div className="cards">
        { favorites.map(item => (
          <Card 
            key={item.id} 
            item={item} 
            favorited
            onFavorite={onAddFavorite}
          />)
        )}
      </div>

    </div>
  );
}