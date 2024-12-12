import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react'

export const Signup = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSignup = (e) => {
        e.preventDefault();
        console.log("yy", email, password)
        createUserWithEmailAndPassword(auth,email,password)
        .then((credential)=>(
            console.log(credential)
        )).catch((error)=>(
            console.log(error)
        ))
    }
    return (
        <>
            <form action="" onSubmit={handleSignup}>
                <h2>Signup Form</h2>
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
