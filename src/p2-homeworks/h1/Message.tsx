import React from 'react'
import style from './Message.module.css'

type MessageDataType = {
    avatar?: string,
    name?: string,
    message?: string,
    time?: string
}

function Message(props: MessageDataType) {
    return (
        <div className={style.message}>
            <img className={'avatar'} src={props.avatar} alt={'avatar img'}/>
            <div className={style.message__block}>
                <h3 className={style.message__author}>{props.name}</h3>
                <div className={style.message__text}>{props.message}</div>
                <div className={style.message__time}>{props.time}</div>
                <div className={style.square}>
                    <div className={style.circle}></div>
                </div>
            </div>
        </div>
    )
}

export default Message
