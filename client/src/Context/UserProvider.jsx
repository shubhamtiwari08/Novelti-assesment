import React, { createContext, useState } from 'react'

export const userContext = createContext()

function UserProvider({children}) {

  const [allUsers,setAllUsers] = useState([])


    const getAllUsers = async()=>{
        try {
            const res = await fetch("https://novelti-backend-6fz5.onrender.com/api/users")
            const data = await res.json()

           setAllUsers(data)

        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser = async(id) =>{
      try {
        const res = await fetch(`https://novelti-backend-6fz5.onrender.com/api/users/${id}`,{
          method:"DELETE",
        })
        const data = await res.json()
        console.log(data)
        setAllUsers(data.users)
        
      } catch (error) {
        console.log(error)
      }
    }

    const createUser = async(newUser)=>{
      try { 
        const res = await fetch("https://novelti-backend-6fz5.onrender.com/api/users",{
          method:"POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(newUser) 
        })
        const data = await res.json()
        
      
      } catch (error) {
        console.log(error)
      }
    }


    const updateUser = async(id,updates)=>{
      try { 
        const res = await fetch(`https://novelti-backend-6fz5.onrender.com/api/users/${id}`,{
          method:"POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(updates) 
        })
        const data = await res.json()
        setAllUsers(data.users)
      
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <userContext.Provider value={{allUsers,getAllUsers,updateUser,createUser,deleteUser}}>{children}</userContext.Provider>
  )
}

export default UserProvider
