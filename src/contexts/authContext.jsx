import { useCallback, createContext, useState, useContext, useEffect } from "react";


const MY_AUTH_APP = 'MY_AUTH_APP'
export const AuthContext = createContext();


export function AuthContextProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const storedAuth = window.localStorage.getItem(MY_AUTH_APP);
        if (storedAuth !== null) {
            setIsAuthenticated(storedAuth === 'true');
        }
    }, []);
    

    const login = useCallback(()=>{
        window.localStorage.setItem(MY_AUTH_APP, true)
        setIsAuthenticated(true)
    }, [])

    const logout = useCallback(()=>{
        window.localStorage.removeItem(MY_AUTH_APP)
        setIsAuthenticated(false)
    }, [])

    const register = useCallback((data) => {
        window.localStorage.setItem(data.username , JSON.stringify(data))
        setIsAuthenticated(true)
        return true;
    }, [])

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            register,
            isAuthenticated
            }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuthContext = () => {
    return useContext(AuthContext)
}