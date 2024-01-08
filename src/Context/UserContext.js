import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateProfile, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();



const UserContext = ({ children }) => {

    const [user, setUser] = useState({});
    const [laoding, setloading] = useState(true);

    const [bangla, setBangla] = useState(true);

    // console.log(user);

    const reagistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const passwordSignIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const facebookSignIn = () => {
        return signInWithPopup(auth, fbProvider);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }


    const LogOut = () => {
        localStorage.removeItem('Token');
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // Email verification
            // if (currentUser === null || currentUser.emailVerified) {

            // }
            setUser(currentUser);
            setloading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);



    const handlBangla = () => {
        setBangla(!bangla);
    }


    return (
        <AuthContext.Provider value={{
            user, reagistration, passwordSignIn,
            LogOut, googleSignIn, facebookSignIn,
            laoding, updateUserProfile, passwordReset,
            verifyEmail, setloading, bangla, handlBangla
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;