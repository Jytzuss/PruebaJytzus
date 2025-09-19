import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
        <nav>
            <Link to="/"></Link>
            <Link to="/analyze"></Link>
            <Link to="/Bankcards"></Link>
        </nav>
    </div>
  )
}

export default Nav