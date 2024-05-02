import { ADD, FILTER, REMOVE, UPDATE, SET , RESET} from '../constants/appConstants'

export default function postReducer(state, action){

    switch(action.type) {

        case ADD: 
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case REMOVE:
            return state
        case FILTER:
            return {
                ...state,
                filteredPosts: state.posts.filter(post => post.title.toLowerCase().includes(action.payload.toLowerCase())),
                isFiltering: true 
            }
        case RESET:
            return {
                ...state,
                filteredPosts: state.posts
            };
        case UPDATE:
            return state
        case SET:
            return {
                ...state,
                posts: action.payload,
                filteredPosts: action.payload
            }
        
        default :
            return state

    }
}