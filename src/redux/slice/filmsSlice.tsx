import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AboutFilmProps } from '../../components/AboutFilm';
import { Card } from '../../components/FilmCard';
import { fetchAboutFilm, fetchFilms } from '../asyncActions';
import {BigDataCardFilm, DataSearchFilms} from '../../interfaces/interfaces';

interface StoreInit {
  films: DataSearchFilms;
  film: AboutFilmProps;
  filmsFavorites: Card[];
  status: string,
  error: string,
}

const initialState: StoreInit = {
  films: {
    Search: [],
    totalResults: '',
    Response: false
  },
  film: {
    Title: '',
    Poster: '',
    Year: '',
    Genre: '',
    Runtime: '',
    Director: '',
    Actors: '',
    imdbRating: '',
    imdbID: '',
  },
  filmsFavorites: [],
  status: '',
  error: '',
} 

const films = createSlice({
  name: 'films',
  initialState,
  reducers: {
    clearFilms(state) {
      state.films =  {
        Search: [],
        totalResults: '',
        Response: false
      }
    },
    toggleFavorite(state, action: PayloadAction<Card>) {
      const el = state.filmsFavorites.find(el => el.imdbID === action.payload.imdbID);
      console.log(el)
      if (!el) state.filmsFavorites.push(action.payload) 
      else  
      state.filmsFavorites = state.filmsFavorites.filter((el) => el.imdbID !== action.payload.imdbID);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, state => {
      state.status = 'loading';
    }),
    builder.addCase(fetchFilms.fulfilled, (state, action: PayloadAction<DataSearchFilms>) => {
      state.status = 'ok';
      console.log(action.payload)
      state.films = action.payload;
    }),
    builder.addCase(fetchFilms.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload as string;
    });
    builder.addCase(fetchAboutFilm.pending, state => {
      state.status = 'loading';
    }),
    builder.addCase(fetchAboutFilm.fulfilled, (state, action: PayloadAction<BigDataCardFilm>) => {
      state.status = 'ok';
      state.film = {
        Title: action.payload.Title,
        Poster: action.payload.Poster,
        Year: action.payload.Year,
        Genre: action.payload.Genre,
        Runtime: action.payload.Runtime,
        Director: action.payload.Director,
        Actors: action.payload.Actors,
        imdbRating: action.payload.imdbRating,
        imdbID: action.payload.imdbID,
      };
    }),
    builder.addCase(fetchAboutFilm.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload as string;
    });
  }
});

export const {clearFilms, toggleFavorite} = films.actions;
export default films.reducer;