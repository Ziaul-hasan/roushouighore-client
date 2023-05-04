/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebasse';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscirbe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser)
            setLoading(false);
        })
        return () => {
            unsubscirbe()
        }
    }, [])

    const updateUserData = (user, name, url) =>{
        updateProfile(user, {
            displayName: name,
            photoURL: url
        })
        .then(() =>{
            console.log('user name and photo updated')
        })
        .then(error =>{
            console.log(error)
        })
    }

    // const user = { display: 'Muri Khan' }
    const authInfo = { user, loading, createUser, signInUser, logOut, updateUserData, googleLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;