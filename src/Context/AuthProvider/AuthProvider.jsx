import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext } from "react";
import { app } from "../../Firebase/firebase.config";


export const AuthContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);  
    } 


    const AuthInfo = {createUser};
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