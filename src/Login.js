import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import './Login.css';
import { auth } from './firebase';
import { login } from './features/userSlice';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert("please enter a full name")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        }));
                    })
            })
            .catch((error) => alert(error))
    };

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                }))
            })
            .catch((error) => alert(error));
    }
    return (

        <div className='login'>
            <img src="data:image/png;base64,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" alt="" />
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full name(required if registering)' />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder='Profile pic url ' />
                <input value={email}
                    onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member? <span className='login__register' onClick={register}>Register now</span></p>
        </div>
    )
}

export default Login
