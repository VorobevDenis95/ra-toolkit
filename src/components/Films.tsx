import { SelectFilms } from "../redux/filmSelector";
import { Card } from "./FilmCard";
import FilmCard from "./FilmCard";
import {useSelector} from 'react-redux';
import './Films.css';
import Loader from "./Loader";



const Films = () => {
  const {status, films} = useSelector(SelectFilms);

  return (
    <>
    <div className="films__container">
    {status === 'loading' && <Loader />}
      {status !== 'loading' && films.Search && films.Search.map((el: Card) => (
        <FilmCard key={el.imdbID} card={el} /> 
        ))}
    </div>
    
    </>
  )
}

export default Films;