import { getAuth, signOut } from 'firebase/auth'
import React from 'react'

export const Home = () => {
    const auth = getAuth();
    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("User Logged Out!")
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            <h1>Home</h1>
            <button onClick={() => handleLogout()}>Logout</button>
        </>
    )
}
