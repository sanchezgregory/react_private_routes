import {createContext, useEffect, useState, useContext} from 'react'

export const AppPostContext = createContext()
const URL = 'https://jsonplaceholder.typicode.com/posts'

export function AppPostContextProvider({ children }) {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                setPosts(json);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error)
                console.error('Error fetching posts:', error);
                setIsLoading(false);
            });
    }, []);
    
    return (
        <AppPostContext.Provider value={{ posts, isLoading, error }}>
            {children}
        </AppPostContext.Provider>
    );
}



export const useAppPostContext = () => {
    return useContext(AppPostContext)
}
