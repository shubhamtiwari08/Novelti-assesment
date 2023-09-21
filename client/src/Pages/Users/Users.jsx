import React, { useContext, useEffect } from 'react'
import User from '../../ Components/User'
import './users.css'
import { useNavigate } from 'react-router'
import { userContext } from '../../Context/UserProvider'

function Users() {

  const {getAllUsers,allUsers} = useContext(userContext) 

  const Navigate = useNavigate()

  
  useEffect(()=>{
     getAllUsers() 
  },[])

  return (
    <div className='container'>
    <h1>USERS</h1>
    <button className='primary-btn' onClick={()=>Navigate('/userform')}>add new user</button>
    <table>
    <thead>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Options</th>
    </thead>
    <tbody>
     {allUsers?.map(data => <User userData={data}/>)}
    </tbody>
    </table>
    </div>
  )
}

export default Users
