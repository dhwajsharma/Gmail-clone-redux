import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import React from 'react'
import EmailRow from '../EmailRow/EmailRow'
import Section from '../Section/Section'
import "./EmailList.css"

const EmailList = () => {
    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className="emailList_sections">
                <Section Icon={Inbox} title="primary" color="red" selected />
                <Section Icon={People} title="social" color="#1A73E8" />
                <Section Icon={LocalOffer} title="promotions" color="green" />
            </div>

            <div className="emailList_list">
                <EmailRow
                    title="twitch"
                    subject="hello"
                    description="test"
                    time="10pm"
                />
            </div>
        </div>
    )
}

export default EmailList
