import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>
  <header className='navbar'>
    <ul className='nav_list'>
      <ol className='nav_list_item'><Link exact='true' to='/'>Home</Link></ol>
      <ol className='nav_list_item'><Link exact='true' to='/list'>List</Link></ol>
      <ol className='nav_list_item'><Link exact='true' to='/map'>Map</Link></ol>
    </ul>
  </header>

export default Navbar