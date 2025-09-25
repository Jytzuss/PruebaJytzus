import React from 'react'
import { Link } from 'react-router-dom'
function Navegacion() {
  return (
    <div className='end'>
          <div className='barra'>
            <ul>
              <li>
                <Link to="/inicio"><img src="/Home.png" alt="" /></Link></li>
              <li>
                <Link to="/Bankcards"><img src="/Bookmark.png" alt="" /></Link></li>
              <li><img src="/Add.png" alt="" /></li>
              <li><img src="/Notifications.png" alt="" /></li>
              <li><img src="/Profile.png" alt="" /></li>
            </ul>
          </div>
        </div>
  )
}

export default Navegacion