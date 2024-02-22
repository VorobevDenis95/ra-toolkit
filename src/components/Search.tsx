import React, { useState } from "react";
import { fetchFilms } from "../redux/asyncActions";
import { useAppDispatch } from "../redux/redux-hook";

const Search = () => {
  const dispatch = useAppDispatch();


  const [valueInput, setValueInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valueInput) {
      dispatch(fetchFilms(valueInput));
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={valueInput} onChange={handleChange} type="text" placeholder='search film'/>
    </form>
  )
}

export default Search;