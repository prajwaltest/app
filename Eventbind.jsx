import React, { useState } from 'react'

function EventbindingFunc() {
    const [name,setname] = useState("Virat Dhoni")
    const [count,setCounter] = useState(0)
    const changename =(name)=>{
        setname(name)
    };
    const incremental = ()=>{
        setCounter(count+1)
    }
    const Decremental = ()=>{
        setCounter(count-1)
    }

  return (
    <div>
      <h4>My name is {name}</h4>
      <button onClick={()=>changename("chikoo") }  >Change Name</button>
      <h4>Conter: {count} </h4>
      <button onClick={()=> incremental()} >Incremental</button>
      <button onClick={()=> Decremental()} >Decremental</button>

    </div>
  )
}
