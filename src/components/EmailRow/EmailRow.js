import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router'
import "./EmailRow.css"

const EmailRow = ({ title, subject, description, time, }) => {

    const history = useHistory();

    return (
        <div onClick={() => history.push("/mail")} className="emailRow">
            <div className="emailRow_options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <div className="emailRow_title">
                {title}
            </div>
            <div className="emailRow_message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow_description">-
                        {" "}{description}
                    </span>
                </h4>
            </div>
            <div className="emailRow_description">
                {time}
            </div>
        </div>
    )
}

export default EmailRow
