import React from 'react'
import vg from '../components/logo.png';
import { Link } from 'react-router-dom';
import {LuSearch} from 'react-icons/lu'
const Header = () => {
  return (
    <nav className='header'>
        <img src={vg} alt='Netflix' />
        <div>
            <Link to={'/tvshows'}>TV Shows</Link>
            <Link to={'/movies'}>Movies</Link>
            <Link to={'/recent'}>Recently Added</Link>
            <Link to={'/mylist'}>My List</Link>
        </div>
        <LuSearch />
    </nav>
  )
}

export default Header
