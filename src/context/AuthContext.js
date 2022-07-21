import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL + 'users/'
        const opts = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      fetch(url, opts)
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])

    console.log(users)
    // users.map((each) => {
    //     if(localStorage.getItem('user') === each.username){
    //         setCurrentUser(each)
    //         return
    //     }
    //   })
    

    let name = 'User'

    return(<>
        <AuthContext.Provider value={{name}}>
            {children}
        </AuthContext.Provider>
    </>)
}