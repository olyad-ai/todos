
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, } from "./actions"
import {todos} from "./states"

export const reducer = (state = todos, action) => {
  
  let newTodo;
  switch(action.type){
   
    case ADD_TODO:
      
       newTodo = [...state];
       newTodo.push(action.payload)
      
       return newTodo 
case DELETE_TODO:
          newTodo = [...state];
          newTodo = newTodo.filter(todo => todo.id !== action.payload)
       
          return newTodo;
          case UPDATE_TODO:
              newTodo = [...state]
           let index = -1
          for(let i=0; i < newTodo.length; i++){
              index++
            if (newTodo[i].id === action.payload.id ){

                break
            }
          }
              
               if(index !== -1){
                   console.log(index)
                   newTodo[index]= action.payload;
                   return newTodo
               }
             break; 
         default: return state;
          }
}