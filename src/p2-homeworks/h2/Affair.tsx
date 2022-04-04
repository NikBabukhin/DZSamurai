import React from 'react'
import {AffairPriorityType, AffairType} from "./HW2";
import style from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    priority: AffairPriorityType
    affair: AffairType
    deleteAffairCallback: (p: number) => void //
}


function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priorityClass =()=> {
        if (props.priority === 'high') {
            return style.high
        } else if (props.priority === 'low') {
            return style.low
        } else if (props.priority === 'middle') {
            return style.middle
        } else {
            return
        }
    }



    return (
        <div className={style.list__wrapper}>
            <span className={style.title}>{props.affair.name}</span>
            <span className={priorityClass()}> [{props.priority}]</span>

            <SuperButton onClick={deleteCallback} className={style.delete}>X</SuperButton>
        </div>
    )
}

export default Affair
