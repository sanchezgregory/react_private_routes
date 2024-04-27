import { useMemo, useCallback, createContext, useState } from "react";
import PropTypes from 'prop-types'
import { useContext } from "react";

const MY_AUTH_APP = 'MY_AUTH_APP'

export const AuthContext = createContext();


export function AuthContextProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH_APP))

    const login = useCallback(()=>{
        window.localStorage.setItem(MY_AUTH_APP, true)
        setIsAuthenticated(true)
    }, [])

    const logout = useCallback(()=>{
        window.localStorage.removeItem(MY_AUTH_APP)
        setIsAuthenticated(false)
    }, [])

    const values = useMemo(()=>{
        login,
        logout,
        isAuthenticated
    },[login,logout, isAuthenticated])

    return (
        <AuthContext.Provider value={{values}}>
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