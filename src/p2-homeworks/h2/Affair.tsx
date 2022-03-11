import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    key: number// key не нужно типизировать
    priority: string
    affair: AffairType
    deleteAffairCallback: (p: number) => void //
}


function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const simpleStyle = {
        width: '200px',
        display: 'flex',
        justifyContent: 'space-between'
    }


    return (
        <div style={simpleStyle} key={props.affair._id}>
            <span>{props.affair.name}</span>
            <span> {props.priority}</span>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
