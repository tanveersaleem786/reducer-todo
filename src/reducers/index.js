// export const initialState = [
//    "todos"[
//        {  
//         item: 'Learn about reducers',
//         completed: false,
//         id: 3892987589
//        },
//        {
//         item: 'Learn about Advance Reducers',
//         completed: false,
//         id: 3892987589
//       }
//     ]
// ]

export const initialState = [
   
        {  
         item: 'Learn about reducers',
         completed: false,
         id: 3892987589
        },
        {
         item: 'Learn about Advance Reducers',
         completed: false,
         id: 3892987587
       }
    
 ]



export const todoReducer = (state, action) => {

    switch(action.type) {
        
        case 'ADD_TODO':     
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }                        
            return [...state,newTodo]
        
        case 'TOGGLE_TODO':
            
            const toggle =  state.map(todo => {
             
              if (action.payload === todo.id) {
                // console.log('in',action.payload+'==='+todo.id);              
                //   console.log("fsaf",!todo.completed)
                //return {state, completed: true}
                return {...todo, completed: !todo.completed};
              }
              else
                return todo; // issue resolve for 
                   
            })
            return toggle;

        case 'CLEAR_COMPLETED_TODO':
            //return [...state, state.filter( todo => todo.completed === false)];
            return  state.filter( todo => todo.completed === false);
            
         
        default:
            return state;

    }

    
}