import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="home-page">
      <Link className="homepage-card" exact="true" to="/list">View List <img src="icon-list.png" alt="icon list"/></Link>
      <Link className="homepage-card" exact="true" to="/map">View Map <img src="icon-map.png" alt="icon map"/></Link>
    </div>
  )
}

export default HomePage