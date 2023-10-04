import {useEffect, useState} from 'react'

const index = () => {
  useEffect(()=> {
    fetch("http://localhost:5000/api/home").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
      }
    )
  },[])
  
  return (
    <div>index</div>
  )
}

export default index
