import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    // const [users, setUsers] = useState(null)
    // const [currentUser, setCurrentUser] = useState(null)

    // const getUsers = async () => {

    //   try{
    //     const url = process.env.REACT_APP_API_URL + 'users/'
    //     const opts = {
    //           method: 'GET',
    //           headers: {
    //             'Content-Type': 'application/json'
    //           }
    //         }
    
    //     const res = await fetch(url, opts)
    //     console.log(res.status)
    //     const data = await res.json()
    //     return data
    
    //   } catch(err) {
    //     console.error(err)
    //   }
    
    // }
    
    // useEffect(() => {
    //   getUsers().then((data) => {
    //   console.log(data)
    //   setUsers(data)
    //   users.map((each)=>{
    //     if (localStorage.getItem('user') === each.username){
    //       setCurrentUser(each)
    //     }
    //   })
    //   })
    // }, [])

    // // console.log(currentUser)

    // let contextData= {
    //   first_name: currentUser.first_name,
    //   last_name: currentUser.last_name,
    //   email: currentUser.email,
    //   userID: currentUser.id
    // }
    
  

    return(<>
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider>
    </>)
  }