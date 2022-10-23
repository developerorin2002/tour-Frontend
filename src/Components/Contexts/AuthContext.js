import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const AuthenticationContext = createContext();
const AuthContext = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const registration = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password);
    };
    const varifyEmail = () =>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }
    const profileUpdate = (name , photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    const google = () =>{

        return signInWithPopup(auth,provider);

    }
    const handleLogIn = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password);
    }
    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser) 
            }
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authMethod = {
        registration ,
         varifyEmail ,
         profileUpdate,
         google,
         handleLogIn,
         user,
         logOut,
         loading
        
        };
    return (
        <AuthenticationContext.Provider value={authMethod}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthContext;