import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Auth/firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser]= useState(null);

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    // onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log('has Current user', currentUser);
    //     }
    //     else {
    //         console.log('current user', currentUser);
    //     }
    // })

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
           console.log('current user', currentUser);
           setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const userInfo = {
        createUser,
        signInUser,
        user,
        signOutUser
    }
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;