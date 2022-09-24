import React,{useState} from "react";
import axios from 'axios';

export default function DogPage(){
  
  const[dog,setDog]=useState()

  const getDog=() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
      setDog(response.data.message)
    })
  }

  return(
    <>
    <button onClick={() => {getDog()}}>Clique aqui</button>
    <img src={dog} alt=""/>
    </>
  )
}