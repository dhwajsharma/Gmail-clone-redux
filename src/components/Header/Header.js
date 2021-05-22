import { Avatar, IconButton } from '@material-ui/core'
import { Apps, ArrowDropDown, Menu, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import "./Header.css"

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }


    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <Menu />
                </IconButton>
                <img src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png" alt="" />
            </div>

            <div className="header_middle">
                <Search />
                <input type="text" placeholder="Search Mail" />
                <ArrowDropDown className="header_inputCaret" />
            </div>

            <div className="header_right">
                <IconButton >
                    <Apps />
                </IconButton>
                <IconButton >
                    <Notifications />
                </IconButton>
                <Avatar className="header_avatar" onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header
