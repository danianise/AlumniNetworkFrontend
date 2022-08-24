import React, {createContext, useState, useEffect} from 'react'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {

    const [profileData, setProfileData] = useState([])
    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [currentUserProfile, setCurrentUserProfile] = useState([])

    // let currentUserProfile = ''

    let accessToken = localStorage.getItem('access_token')
    let userId = useState(localStorage.getItem('userId'))
    

    useEffect(() => {

        // fetch(
        //     process.env.REACT_APP_API_URL + 'users/', 
        //     {
        //       method: 'GET',
        //       headers: {
        //           'Content-Type': 'application/json',
        //       }
        //     }
        //   )
        //   .then(res => res.json())
        //   .then(data => {
        //       setUsers(data)
        //       console.log('users', users)
        //   })

        fetch(
            // process.env.REACT_APP_API_URL + 'profile/', 
            'https://radiant-tundra-28877.herokuapp.com/profile/',
            {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${accessToken}`
              }
            }
          )
          .then(res => res.json())
          .then(data => setProfileData(data))
          
    }, [])

    // console.log('profile data', profileData)
    // console.log('currentUserProfile', currentUserProfile)

    // profileData.map((eachProfile) => {
    //     if(eachProfile.user === userId){
    //         setCurrentUserProfile(eachProfile)
    //     }
    // })

    // console.log('currentUserProfile', currentUserProfile)

    let contextData = {
        profileData:profileData
    }
    
    return(<>
        {}
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    </>)
}