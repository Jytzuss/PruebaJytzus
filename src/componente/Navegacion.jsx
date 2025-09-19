import React from 'react'
import { Link } from 'react-router-dom'
function Navegacion() {
  return (
    <div className='end'>
          <div className='barra'>
            <ul>
              <li>
                <Link to="/inicio"><img src="img/Home.png" alt="" /></Link></li>
              <li>
                <Link to="/Bankcards"><img src="img/Bookmark.png" alt="" /></Link></li>
              <li><img src="img/Add.png" alt="" /></li>
              <li><img src="img/Notifications.png" alt="" /></li>
              <li><img src="img/Profile.png" alt="" /></li>
            </ul>
          </div>
        </div>
  )
}

export default Navegacion