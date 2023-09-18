import React from 'react'
import User from '../../ Components/User'
import './users.css'

function Users() {
  return (
    <div className='container'>
    <h1>USERS</h1>
    <button className='primary-btn'>add new user</button>
    <table>
    <thead>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Options</th>
    </thead>
    <tbody>
     <User/>
    </tbody>
    </table>
    </div>
  )
}

export default Users
