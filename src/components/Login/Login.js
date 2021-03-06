import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { auth, provider } from '../../firebase'
import "./Login.css"

const Login = () => {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoUrl
                }))
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" alt="" />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
