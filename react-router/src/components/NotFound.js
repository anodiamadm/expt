import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2>Page Not Found</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod consectetur culpa architecto eaque minus qui doloremque laudantium vitae, similique dicta.</p>
        <p>Go to <Link to={'/'}>Home Page</Link>.</p>
    </div>

  )
}

export default NotFound
