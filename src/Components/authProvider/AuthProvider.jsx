/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut,
    signInWithEmailAndPassword, GoogleAuthProvider,
    signInWithPopup, updateProfile
} from "firebase/auth";
import { app } from '../../../firebase/firebase-config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState()
    
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Monitor user changes
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser)
        })

        return () => {
            return unSubscribe();
        }
    }, [])

    const logOut = () => {
        
       return signOut(auth);
    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    
    
    const googleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const updateUserProfile = (name, imgURL) => {
        return updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL : imgURL,
                })
    }


    const authInfo = {
        registerUser,
        loading,
        user,
        updateUserProfile,
        logOut,
        loginUser,
        googleUser,
        setReload
        
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;