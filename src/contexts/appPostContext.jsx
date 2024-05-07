import { useReducer } from 'react'
import {createContext, useEffect, useState, useContext} from 'react'
import postReducer from '../reducers/postReducer'
import { ADD, FILTER, SET, RESET, LOAD_DB } from '../constants/appConstants'

export const AppPostContext = createContext()
const URL_POST = 'https://jsonplaceholder.typicode.com/posts'
const URL_DB = 'https://dragonball-api.com/api/characters'

export function AppPostContextProvider({ children }) {

    const initialState = {
        posts:[],
        filteredPosts:[],
        isFiltering: false
    }

    const [load, setLoad] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [state, dispatch] = useReducer(postReducer, initialState)

    const addPost = (post) => {
        dispatch({type:ADD, payload:post})
    }
    const loadPosts = (posts) => {
        dispatch({type:SET, payload:posts})
    }
    const filterPost = (filter) => {
        dispatch({type:FILTER, payload:filter})
    }
    const resetFilter = () => {
        dispatch({type:RESET})
    }
    const loadDragonBallApi = (chars) => {
        dispatch({type:LOAD_DB, payload:chars})
    }

    useEffect(() => {
            
        fetch(URL_POST)
        .then(response => response.json())
        .then(data => {
            loadPosts(data)
            setIsLoading(false)
        })
        .catch(error => {
            setError(error)
            console.error('Error fetching posts:', error)
            setIsLoading(false)
        });      
                   
        fetch(URL_DB)
        .then(response => response.json())
        .then(data => {
            loadDragonBallApi(data)
            setIsLoading(false)
        })
        .catch(error => {
            setError(error)
            console.error('Error fetching chars:', error)
            setIsLoading(false)
        });      

    }, [load]);


    return (
        <AppPostContext.Provider value={{ 
            posts: state.posts,
            chars: state?.chars?.items ?? [],
            filteredPosts: state.filteredPosts,
            isFiltering: state.isFiltering,
            filterPost,
            resetFilter,
            setLoad,
            load,
            isLoading,
            addPost,
            error }}>
            {children}
        </AppPostContext.Provider>
    );
}



export const useAppPostContext = () => {
    return useContext(AppPostContext)
}
