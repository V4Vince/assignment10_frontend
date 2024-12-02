import React, { createContext, useContext, useState} from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState({loggedIn: false, user: null})

    const actions = {
        logUserIn: (user) => {
            user ?  setIsLoggedIn({loggedIn: true, user}) : setIsLoggedIn({loggedIn: false, user: null})
           
        },

        logUserOut: () => {
            setIsLoggedIn({loggedIn: false, user: null})
        }
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, actions}}>{children}</AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext)
}

export { AuthProvider, useAuth}

//Figure out why the app keeps refreshing exceeding the maximum number of re-renders