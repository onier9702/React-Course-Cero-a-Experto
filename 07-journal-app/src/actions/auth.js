import Swal from 'sweetalert2';

import { auth, google } from "../firebase/firebase-config";
import { types } from "../types/types";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { finishLoading, startLoading } from "./ui";

export const startLoginWithEmailPassword = (email, password) => {

    return (dispatch) => {
        // Dispatch startLoading
        dispatch(startLoading());
        console.log('startLoading executed');
        signInWithEmailAndPassword(auth, email,password)
            .then( ({user}) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName));
                // Dispatch finishLoading
                dispatch(finishLoading());
                console.log('finishedLoading executed');
            })
            .catch((e) => {
                Swal.fire('Error',e.code,'error');
                dispatch(finishLoading());
              });
    }
};


export const startRegister = (name, email , password) => {

    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then( ({user}) => {
                
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    dispatch(login(user.uid, user.displayName));
                    console.log(user.displayName);
                }).catch((e) => {
                    Swal.fire('Error',e.code,'error');
                });
                
            })
    }
};

export const googleLogin = () => {
    return (dispatch) => {
  
        signInWithPopup(auth,google)
            .then( ({user}) => {
                
                dispatch(login( user.uid, user.displayName ));
            })
    }
};



export const login = (uid, displayName) => ( {
    type: types.login,
    payload: {
        uid,
        displayName,
    }
});

export const startLogout = () => {

    return (dispatch) => {
        signOut(auth)
            .then((user) => {
                console.log('Log out');
                dispatch(logout());
            })
            .catch(err => {
                console.log(err);
            })
    }
};

export const logout = () => ({

    type: types.logout,
});


