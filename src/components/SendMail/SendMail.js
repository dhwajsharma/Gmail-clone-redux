import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import "./SendMail.css"
import { useForm } from "react-hook-form"
import { closeSendMessage } from '../../features/mailSlice'
import { useDispatch } from 'react-redux'
import { db } from "../../firebase"
import firebase from "firebase"

const SendMail = () => {
    const dispatch = useDispatch(closeSendMessage);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <Close onClick={() => dispatch(closeSendMessage())} className="sendMail_close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="to"
                    placeholder="To"
                    type="email"
                    {...register("to", { required: true })}
                />
                {errors.to && <p className="sendMail_error">To is Required!</p>}

                <input
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    {...register("subject", { required: true })}
                />
                {errors.subject && <p className="sendMail_error">Subject is Required!</p>}

                <input
                    name="message"
                    placeholder="Message..."
                    type="text"
                    className="sendMail_message"
                    {...register("message", { required: true })}
                />
                {errors.message && <p className="sendMail_error">Message is Required!</p>}


                <div className="sendMail_options">
                    <Button
                        className="sendMail_send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                        </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
