import React from 'react'
import './user.css'

function User() {
  return (
    <tr>
      <td>name:</td>
      <td>email:</td>
      <td>phone no.</td>
      <td>
      <button className='secondary-btn'>edit</button>
      <button className='secondary-btn'>delete</button>
      </td>
    </tr>
  )
}

export default User
