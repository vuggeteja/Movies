import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Profile from './common/profile';

const Navbar = ({user}) => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Movies</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-item nav-link" to="/movies">Home </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-item nav-link" to="/customers">Customers </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-item nav-link" to="/rentals">Rentals </NavLink>
            </li>

            {/* <li className="nav-item ">
              <NavLink className="nav-item nav-link" to="/rough">rough </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-item nav-link" to="/rough1">rough1 </NavLink>
            </li> */}

            {!user &&(
            <React.Fragment>
               <li className="nav-item ">
              <NavLink className="nav-item nav-link" to="/loginformd">Login </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-item nav-link' to="/registrationform">Register</NavLink>            
            </li> 
            </React.Fragment>)
            }

            {user &&(
            <React.Fragment>
               <li className="nav-item ">
              <NavLink className="nav-item nav-link" to="/profile">{user.name} </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-item nav-link' to="/logout">Logout</NavLink>            
            </li> 
            </React.Fragment>)
            }
          </ul>
        </div>
    </nav>)
}

export default Navbar