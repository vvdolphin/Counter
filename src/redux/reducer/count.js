const reducer = (state = 0,action) =>{
    switch (action.type){
        case 'INCREMENT':
           return state + 1
        case 'DECREMENT':
            return state - 1
        case 'INIT':
            state = 0
            return state
         default:   
            return state
    }

}
export default reducer