import {NavLink, useLocation} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import './Header.css';
import { useAppDispatch } from '../redux/redux-hook';
import { useSelector } from 'react-redux';
import { SelectFilms } from '../redux/filmSelector';
import { clearFilms } from '../redux/slice/filmsSlice';

const Header = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const {films} = useSelector(SelectFilms);
  const handleClick = () => {
    if (films.Search.length !== 0 && location.pathname !== '/') {
      dispatch(clearFilms()); 
    }
  }

  return (
    <>
    <ul className='header'>
      <li>
        <NavLink className='navLink' onClick={handleClick} to={'/'}>Главная</NavLink>
      </li>
        <NavLink className='navLink' to={'/favorites'}>Избранное</NavLink>
    </ul>
    <Outlet />
    </>
    )
}

export default Header;