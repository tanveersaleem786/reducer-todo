export const initialState = {
  
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589     

}

export const todoReducers = (state, action) => {

        switch(action.type) {
          case "Add" :
                return state; 
          case "Toggle":
                return state;
          case "Clear":
                return state;
          default:
                return state;
        }

}