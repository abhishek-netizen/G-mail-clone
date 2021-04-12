import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase'
import './Login.css'

function Login() {

    const dispatch = useDispatch();

     

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
           }))
        })
    }






    return (
        <div className="login">
           <div className="login__container">
                <img src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="" />
           
             <Button variant="contained" color="primary"  onClick={signIn}>Login</Button>
           
            </div>
        </div>
    )
}

export default Login
