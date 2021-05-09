import { Button } from '@material-ui/core'
import { Add, Inbox } from '@material-ui/icons'
import React from 'react'
import SidebarOption from '../SidebarOption/SidebarOption'
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Button startIcon={<Add fontSize="large" />} className="sidebar_compose">Compose</Button>
            <SidebarOption Icon={<Inbox />} title="Inbox" number={54} />
        </div>
    )
}

export default Sidebar
