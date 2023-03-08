export function blogReducer(state = {all:[]}, action){
    switch (action.type){
    case ("GET_BLOGS"):
        console.log({...state, all: action.payload})
        return {...state, all: action.payload} 

    // case ("NEW_BLOG"):
    //     return {...state, all: state.all.concat(action.payload)}

    case ("DELETE_BLOG"):
        return {...state, all: state.all.filter(blog => blog.id !== action.payload.id)}

    default:
    return state
    }
}