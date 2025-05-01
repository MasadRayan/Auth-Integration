import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Auth/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

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
        //    console.log('current user', currentUser);
           setUser(currentUser);
           setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const userInfo = {
        createUser,
        signInUser,
        user,
        loading,
        signOutUser,
        signInWithGoogle
    }
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;