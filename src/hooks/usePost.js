import { useState } from 'react'
import { useEffect } from 'react'


const usePost = (id = null) => {
    
    const URL = id ? `https://jsonplaceholder.typicode.com/posts/${id}`: null
    const [post, setPost] = useState({})
    const [isLoading, setIsLoading] = useState(true)
   
    useEffect(()=>{
        fetch(URL)
        .then(response => response.json() )
        .then(json => {
            setPost(json)
            setIsLoading(false)
        })
    }, [id])
    
    return [post, isLoading]
  
}

export default usePost