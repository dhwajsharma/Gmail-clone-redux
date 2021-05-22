import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import "./SendMail.css"
import { useForm } from "react-hook-form"

const SendMail = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <Close className="sendMail_close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="to"
                    placeholder="To"
                    type="text"
                    {...register("name value", { required: true })}
                />
                {errors.to && <p className="sendMail_error">To is Required!</p>}

                <input
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    {...register("name value", { required: true })}
                />
                {errors.subject && <p className="sendMail_error">Subject is Required!</p>}

                <input
                    name="message"
                    placeholder="Message..."
                    type="text"
                    className="sendMail_message"
                    {...register("name value", { required: true })}
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
