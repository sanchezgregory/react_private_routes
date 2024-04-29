import { useMemo, useCallback, createContext, useState, useContext } from "react";
import PropTypes from 'prop-types'


const MY_AUTH_APP = 'MY_AUTH_APP'
export const AuthContext = createContext();


export function AuthContextProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH_APP))

    const login = useCallback(()=>{
        console.log('si llega aqui')
        window.localStorage.setItem(MY_AUTH_APP, true)
        setIsAuthenticated(true)
    }, [])

    const logout = useCallback(()=>{
        window.localStorage.removeItem(MY_AUTH_APP)
        setIsAuthenticated(false)
    }, [])

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            isAuthenticated
            }}>
            {children}
        </AuthContext.Provider>
    )

}

AuthContextProvider.propTypes = {
    children: PropTypes.object
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}