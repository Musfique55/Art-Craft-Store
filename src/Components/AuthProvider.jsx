import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase.config";
import Swal from "sweetalert2";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loader,setLoader] = useState(true);

    const createUser = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

   const updateUser = (name,photoURL) => {
    setLoader(true);
    return  updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photoURL
      })
    }
    const googleLogin = () => {
      signInWithPopup(auth, googleProvider)
      .then((res) => {
            console.log(res);
      })
      .catch(error => {
          Swal.fire({
              title: "Error!",
              text: `${error.message}`,
              icon: "error"
            });
      })
    }

    const githubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then(() => {

        })
        .catch(error => {
            Swal.fire({
                title: "Error Occured!",
                text: `${error.message}`,
                icon: "error"
              });
        })
    }
    const logOut = () => {
       return  signOut(auth);
    }
    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => unSubscribe();
    },[])

    const userInfo = {user,createUser,updateUser,loader,logOut,loginUser,googleLogin,githubLogin}


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node
}
export default AuthProvider;