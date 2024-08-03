import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setUsers(users))
    }
    );

  return (
    <div>
      <h4>Hello</h4>
      {
        users.map((user)=>(
            <>
            <h5>
            <Link  to={'/user/'+user.id} style={{color:'yellow'}}> {user.name}</Link><br></br>
            
            </h5></>
        ))
      }
     
     
    </div>
  )
}

export default User
