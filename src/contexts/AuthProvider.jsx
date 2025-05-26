import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

    const userSignUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const deleteUserFromFirebase = ()=>{
        return deleteUser(auth.currentUser)
    }

    const userSignIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        userSignUp,
        deleteUserFromFirebase,
        userSignIn
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;