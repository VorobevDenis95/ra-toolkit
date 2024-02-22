import { useSelector } from "react-redux";
import { SelectFilms } from "../redux/filmSelector";
import { Card } from "./FilmCard";
import FilmCard from "./FilmCard";
import './Favorites.css'

const Favorites = () => {
  const {filmsFavorites} = useSelector(SelectFilms);

  return (
  <div className="films__container">
    {filmsFavorites.length === 0 && <span className="favorite__text">Нет избранного</span>}
  {filmsFavorites.map((el: Card) => (
    <FilmCard key={el.imdbID} card={el} /> 
    ))}
</div>

  )
}

export default Favorites;