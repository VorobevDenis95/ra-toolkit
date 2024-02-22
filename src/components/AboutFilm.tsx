import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SelectFilms } from "../redux/filmSelector";
import { fetchAboutFilm } from "../redux/asyncActions";
import { useAppDispatch } from "../redux/redux-hook";
import './AboutFilm.css';
import Loader from "./Loader";


export interface AboutFilmProps {
  Title: string,
  Poster: string,
  Year: string,
  Genre: string,
  Runtime: string,
  Director: string,
  Actors: string,
  imdbRating: string,
  imdbID: string,
}

const AboutFilm = () => {
  const dispatch = useAppDispatch();
  const {status, film} = useSelector(SelectFilms);

  const {id} = useParams();
  
  useEffect(() => {
    dispatch(fetchAboutFilm(id as string));
  }, [id])


  return (
    <> 
    {status === 'loading' && <Loader />}
    { status !== 'loading' &&
    <div className="about__film">
      <span>Название фильма:</span>
      <span>{film.Title}</span>
      <img src={film.Poster} alt="poster" />
      <span>`Год: ${film.Year}`</span>
      <span>`Жанр: ${film.Genre}`</span>
      <span>`Продолжительность: ${film.Runtime}`</span>
      <span>`Режисер: ${film.Director}`</span>
      <span>`Актеры: ${film.Actors}`</span>
      <span>`Рейтинг: ${film.imdbRating}`</span>
    </div>
    }
    </>
  )
}

export default AboutFilm;