import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Components/Firebase/Firebase.config";
import PropTypes from 'prop-types';

// My Context
export const AuthContext = createContext('');
const Auth = getAuth(app);

const Private = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    const SigninUser = (email ,password) => {
        setLoading(true);
        return signInWithEmailAndPassword (Auth , email ,password)
    }

    const LogOut = () => {
        setLoading(true);
      return signOut(Auth);
    }

    const AuthInfo = 
    { user ,
    CreateUser,
    SigninUser,
    LogOut,
    loading,
}
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
Private.propTypes = {
    children: PropTypes.node.isRequired
}
export default Private;