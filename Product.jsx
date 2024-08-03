import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#">Product</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to="electronic">Electronic  <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="kitchen">kitchen</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="books">Books</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="fashion">Fashion</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
<Outlet/>
    </div>
  )
}

export default Product
