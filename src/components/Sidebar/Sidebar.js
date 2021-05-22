import { Button, IconButton } from '@material-ui/core'
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../../features/mailSlice'
import SidebarOption from '../SidebarOption/SidebarOption'
import "./Sidebar.css"

const Sidebar = () => {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button onClick={() => dispatch(openSendMessage())} startIcon={<Add fontSize="large" />} className="sidebar_compose">Compose</Button>
            <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={Star} title="Starred" number={54} />
            <SidebarOption Icon={AccessTime} title="Snoozed" number={54} />
            <SidebarOption Icon={LabelImportant} title="Important" number={54} />
            <SidebarOption Icon={NearMe} title="Sent" number={54} />
            <SidebarOption Icon={Note} title="Drafts" number={54} />
            <SidebarOption Icon={ExpandMore} title="More" number={54} />

            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton >
                        <Duo />
                    </IconButton>
                    <IconButton >
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
