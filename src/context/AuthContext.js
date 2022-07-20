import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [authTokens, setAuthTokens] = useState(null)

    let name = 'User'

    return(
        <AuthContext.Provider value={{name}}>
            {children}
        </AuthContext.Provider>
    )
}