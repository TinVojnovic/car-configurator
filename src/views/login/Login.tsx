import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";

export const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(auth.currentUser?.email)
            } else {
            }
        });
    }, []);

    function handleForm(e: React.FormEvent) {
        e.preventDefault();

        /*if (!email || !password) {
          console.log("NEMA");
          return;
        }
    
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });*/

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    function logout() {
        console.log(auth.currentUser?.email)
        signOut(auth).then(() => {
            console.log("Singed out")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }

    return (
        <React.Fragment >
            <form onSubmit={handleForm}>
                <input onChange={(e) => setEmail(e.currentTarget.value)} type="email" />
                <br />
                <input
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    type="password"
                />
                <br />
                <button>Submit</button>
            </form>

            <button onClick={logout}>Logout</button>
            <Outlet />
        </React.Fragment>
    )
}