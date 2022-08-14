/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { wrapper, buttons, input } from "./Login.styles";
import { userAtoms } from "../../states/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const setValue = useSetRecoilState(userAtoms.currentUserUid);
    const getValue = useRecoilValue(userAtoms.currentUserUid)
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setValue(user.uid);
                
                console.log(auth.currentUser?.uid);
                console.log("uid: ", getValue)
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

        console.log(auth)
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
        <React.Fragment>
            <div>
                <form css={wrapper} onSubmit={handleForm}>
                    <input css={input} onChange={(e) => setEmail(e.currentTarget.value)} type="email" />
                    <input css={input}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        type="password"
                    />
                </form>

                <div css={buttons}>
                    <button onClick={handleForm}>Submit</button>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>

            <Outlet />
        </React.Fragment>
    )
}