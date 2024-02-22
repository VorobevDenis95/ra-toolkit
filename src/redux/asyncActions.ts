import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFilms = createAsyncThunk(
  'films/fetchFilms',
  async function (title:string, {rejectWithValue}){
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=9713c5e7&s=${title}`);
      if (!response.ok) throw new Error('Servel Error!');
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const fetchAboutFilm = createAsyncThunk(
  'films/fetchAboutFilm',
  async function (id: string, {rejectWithValue}){
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=9713c5e7&i=${id}`);
      if (!response.ok) throw new Error('Servel Error!');
      const data = await response.json();
      return data ;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)