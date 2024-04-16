import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { createContext } from "react";
import { app } from "../../Firebase/firebase.config";


export const AuthContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);  
    } 


    const AuthInfo = [auth, createUser, ];
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;