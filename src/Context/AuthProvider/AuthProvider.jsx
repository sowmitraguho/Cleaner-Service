import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";



export const AuthContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [info, setInfo] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (name, photoURL, email, password) => {
        setInfo({displayName: name, photoURL: photoURL});
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);  
    } 
    const SignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
       
        return signOut(auth);
    };

    if (info) {
      updateProfile(user, info)
      .then(() => {
        // Profile updated!
        // ...
        console.log('profile Updated', user);
      }).catch((error) => {
        // An error occurred
        // ...
        console.error(error);
      });
      console.log('user inside state changed', user);
      
    }
    


    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            
            console.log(currentUser);
            setUser(currentUser);
            console.log(user);
            setLoading(false);
          });
          

          return () => {
            unsubscribe();
          }
    }, []);


    const AuthInfo = {auth, createUser, updateProfile, SignIn, user, loading, LogOut, info};
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {

    children: PropTypes.node.isRequired,
    
    }

export default AuthProvider;