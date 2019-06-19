import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <p>This is header</p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/directions">Directions</Link>
      <Link to="/photos">Photos</Link>
    </div>
  )
}
