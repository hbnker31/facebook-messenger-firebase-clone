import React, {forwardRef} from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css'

const Message = forwardRef(({message, userName}, ref) => {
    const isUser= userName === message.userName
    return (
        <Card ref={ref} className={`message__card ${isUser?"message_user": "message_guestuser"}`}>
            <CardContent>
                <Typography 
                    color="white"
                    variant="h5"
                    component="h2"
                >
                    {!isUser && `${message.userName}: `}{message.message}
                </Typography>
            </CardContent>
        </Card>
    )
})

export default Message
