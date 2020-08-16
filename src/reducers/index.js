export const initialState = [
   
    {  
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589,
        tags: 'A, B, C'
    },
    {
        item: 'Learn about Advance Reducers',
        completed: false,
        id: 3892987587,
        tags: 'X, Y, Z'
    }
    
 ]

export const todoReducer = (state, action) => {

    switch(action.type) {
        
        case 'ADD_TODO':     
            const newTodo = {
                item: action.payload.newTodo,
                completed: false,
                id: Date.now(),
                tags: action.payload.tags
            } 
                                
            return [...state, newTodo]
        
        case 'TOGGLE_TODO':
            
            const toggle =  state.map(todo => {
             
              if (action.payload === todo.id) {                
                return {...todo, completed: !todo.completed};
              }
              else
                return todo; // issue resolve for 
                   
            })
            return toggle;

        case 'CLEAR_COMPLETED_TODO':           
            return  state.filter( todo => todo.completed === false);
            
         
        default:
            return state;

    }

    
}