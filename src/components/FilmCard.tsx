import { useNavigate } from "react-router-dom";

import './FilmCard.css';
import { SelectFilms } from "../redux/filmSelector";
import { useAppDispatch, useAppSelector } from "../redux/redux-hook";
import { useEffect, useState } from "react";
import { toggleFavorite } from "../redux/slice/filmsSlice";

interface Card {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}

interface PropsCard {
  card: Card,
}

const FilmCard = ({card}: PropsCard) => {
  const dispatch = useAppDispatch();
  const [favorite, setFavorite] = useState(false);
  const {filmsFavorites} = useAppSelector(SelectFilms);  

  useEffect(() => {
    checkFavorite();
  }, [filmsFavorites])

  function checkFavorite () {
    const find = filmsFavorites.find(el => el.imdbID === card.imdbID)
    find ? setFavorite(true) : setFavorite(false);
  }
    
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/films/${id}`);
  };

  const handleAddFavorite = () => {
    dispatch(toggleFavorite(card));
  }

  return (
    <div className={`film__item ${favorite ? 'favorite' : ''}`} >
      <span>Название фильма:</span>
      <span>{card.Title}</span>
      <div className="film__image-container" onClick={() => handleClick(card.imdbID)}>
      <img className="film__image" src={card.Poster} alt="poster"/>
      </div>
      <span>{`Год: ${card.Year}`}</span>
      <div>
        <button onClick={handleAddFavorite}>
            {!favorite ? 'Добавить в избранное' : 'Убрать избранного'}
        </button>
      </div>
    </div>
  )
}

export default FilmCard;
export type {Card};