import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="NavLink">
          <Link to="/">
            <li>Logo</li>
          </Link>
          <Link to="/user">
            <li>Users</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
        
      
    )
  }
}
export default Nav