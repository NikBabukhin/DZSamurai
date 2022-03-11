import React from 'react'

type AffairPropsType = {
    key:number// key не нужно типизировать
    priority: string
    affair: string
    deleteAffairCallback: (p:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.key)
    }

    const simpleStyle = {
        width: '200px',
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <div style={simpleStyle}>
            <span>{props.affair}</span>
            <span> {props.priority}</span>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
