import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

const UserContext = ({ children }) => {

    const [user, setUser] = useState({});
    const [laoding, setloading] = useState(true);

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

    const LogOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setloading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);


    return (
        <AuthContext.Provider value={{
            user, reagistration, passwordSignIn,
            LogOut, googleSignIn, facebookSignIn,
            laoding
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;