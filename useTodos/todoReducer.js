



export const todoReducer =(initialState=[],action={}) =>{



    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState , action.payload ]
            
           throw new Error ('action.type=[TODO] Add Todo no esta implementada ')
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id != action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map(todo=>{
                if(todo.id == action.payload){
                        return {
                            ...todo,
                            done: !todo.done

                        }

                }

                return todo
            })    
        default:
           return initialState;
    }
}
   