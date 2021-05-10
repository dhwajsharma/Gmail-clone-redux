import { Avatar, Icon, IconButton } from '@material-ui/core'
import { Apps, ArrowDropDown, Menu, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import "./Header.css"

const Header = () => {
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
                <Icon style={{ padding: "10px" }}>
                    <Apps />
                </Icon>
                <Icon style={{ padding: "15px" }}>
                    <Notifications />
                </Icon>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
