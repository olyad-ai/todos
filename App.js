import { Button } from '@material-ui/core'
import {reducer} from "./redux/reducer"
import React, { useEffect, useState, useReducer } from 'react'
import "./App.css"
import TodoInput from './TodoInput'
//import axios from "./axios"
import TodoList from './TodoList'
//import { useSelector } from 'react-redux';
//import axios from "axios"
//import Quotes from './Quotes'
//import FlipMove from 'react-flip-move';

function App() {
 
  
  const [dats, setDats] = useState("")
  const [quotes, setQuotes] = useState([])
 
  useEffect(() => {
    (async  () => {
      try{
        const res = await fetch("https://type.fit/api/quotes ")
        const response = await res.json();
        const index = Math.floor(Math.random() * response.length)
        setQuotes(response)
        setDats(response[index])
        console.log(response)
      }
      catch(error){
        console.log(error)
      }
    })()

    
   
  }, [])
  const Changgeapi = (dats) => {
    const inde = Math.floor(Math.random() * 1000) 
    setDats(quotes[inde]) 
    console.log(dats)
  }
  return (
    <div className="app">
      <div className="app__quotes">
        {dats ? 
        <div className="span">
      <span>"{dats.text}"</span>
      <span>Author: {dats.author}</span>
      </div>: <h1>Loading....</h1>
        }
       <div className="app__changequotes">
           <Button onClick={Changgeapi} className="app__changequotesbutton">
             More Inspirational Quotes
           </Button>
       </div>
      </div>
     
    
      <TodoInput />
    
  
    

          <TodoList/> 
    
  
      
     
    
    </div>
  )
}

export default App

