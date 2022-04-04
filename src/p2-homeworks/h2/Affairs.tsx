import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = {
    data: Array<AffairType>,
    setFilter: (p: FilterType) => void,
    deleteAffairCallback: (p: number) => void,
}


function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            priority={a.priority}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}
            <div className={style.buttons__wrapper}>
                <SuperButton className={style.button} onClick={setAll}>All</SuperButton>
                <SuperButton className={style.button} onClick={setHigh}>High</SuperButton>
                <SuperButton className={style.button} onClick={setMiddle}>Middle</SuperButton>
                <SuperButton className={style.button} onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
