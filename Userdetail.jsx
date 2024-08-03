import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'  

const Userdetail = () => {
    let {userId} = useParams();
     const[users,setUsers]=useState({});
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/'+userId)
        .then(response => response.json())
        .then(userjson => setUsers(userjson))
    },[userId]
    );

  return (
    <div>
      <h4>Hello</h4>
     <h4>{users.id}</h4>
     <h4>{users.name}</h4>
     <h4>{users.phone}</h4>
     
     
    </div>
  )
}
 
export default Userdetail
