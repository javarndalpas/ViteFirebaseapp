import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword,  } from 'firebase/auth';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const handleLogin = (e) => {
        e.preventDefault()
        console.log("yy", email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((credential) => (
                console.log(credential)
            )).catch((error) => (
                console.log(error)
            ))
    }

    return (
        <>
            <form action="" onSubmit={handleLogin}>
                <h2>Login Form</h2>
                <div className=''>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id='email'
                        value={email}
                        placeholder='Enter email'
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className=''>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id='password'
                        value={password}
                        placeholder='Enter Password'
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
