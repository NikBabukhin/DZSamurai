import React from 'react'
import Message from './Message'
import style from './../../p1-main/m1-ui/u1-app/App.module.css'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (

        <div className={style.container__wrapper}>
            <hr/>
            <h3>homeworks 1</h3>
            <div  className={style.container}>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            </div>
            <hr/>
        </div>
    )
}

export default HW1
