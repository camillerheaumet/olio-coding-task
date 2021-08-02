import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () =>
  <div className='home-page'>
    <button className='button-link'><Link exact='true' to='/list'>List</Link></button>
    <button className='button-link'><Link exact='true' to='/map'>Map</Link></button>
  </div>

export default HomePage