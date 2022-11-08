import React, { createContext,useState,useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut,onAuthStateChanged,updateProfile  } from "firebase/auth";
import app from '../component/Firebase/Firebase'
const auth = getAuth(app)
export const myContxt = createContext()
const AuthContext = ({children}) => {

    const [user, setUser] = useState({})
    const [loadding, setloadding] = useState(true)

    const SignIn = (email,password)=>{
        setloadding(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const login = (email,password)=>{
        setloadding(true)
        return signInWithEmailAndPassword (auth, email,password)
    }

    const logOut = () => {
        setloadding(true)
        return signOut(auth)
    }

    const getProfile = (profile) =>{
        setloadding(true)
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
          setloadding(false)
      })
    
      return () => {
        unsubscribe()
      }
    }, [])
    



    
    const authValue = {user,loadding,SignIn,login,logOut,getProfile,setUser}
    return (
        <myContxt.Provider value={authValue}>
            {children}
        </myContxt.Provider>
    );
};

export default AuthContext;