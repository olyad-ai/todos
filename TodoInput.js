import React, { useState, } from 'react'
import { Input, Button } from '@material-ui/core';
import "./TodoInput.css"
import { addTodo } from './redux/actions';
import {v1 as uuid} from "uuid"
import { useDispatch } from 'react-redux';
import ErrorIcon from '@material-ui/icons/Error';


function TodoInput({id}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
   
    return (
        <div className="todoinput">
              
         <Input value={name} onChange={(e) => setName(e.target.value)}type="text" placeholder="Type something"/> 
           
        
         
        {name.length > 0 ? 
         <Button className="todoinput__addbutton" onClick={() => {
            dispatch(addTodo({
                
                id: uuid(),
                name: name.charAt(0).toUpperCase() + name.substring(1, name.length),
                createdOn: new Date().toString()
               
           }) 
           )
              setName("")
        }}>Add Todo</Button> : <p className="todo__required">Todo Is Required <ErrorIcon/></p>}
       
      
        </div>
    )
}

export default TodoInput



