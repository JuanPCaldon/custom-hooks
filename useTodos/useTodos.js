import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";




 const init = () => {
 
      return JSON.parse( localStorage.getItem('todos')) || [];

 }
 

export const useTodos = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer,[], init)
   
   useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) );
   
  
   }, [todos])
   


   const handlenewTodo=( todo ) => {
       
        const action ={ 

            type: '[TODO] Add Todo' ,
            payload: todo

        }

    dispatchTodo(action);       

   }


   const handleDeleteTodo = ( id) => {


        dispatchTodo({
            type: '[TODO] Remove Todo',
            payload: id
        })
   }
    
   const handleToggleTodo = ( id) => {
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload: id
    })
}

return{

    todos,
    handlenewTodo,
    handleDeleteTodo,
    handleToggleTodo




}




}
