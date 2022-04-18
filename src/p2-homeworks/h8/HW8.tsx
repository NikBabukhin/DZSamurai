import React, {useState} from 'react'
import {checkAgeAC, homeWorkReducer, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from "../../p1-main/m1-ui/u1-app/App.module.css";

type UserItemType = {
    _id: number,
    name: string,
    age: number,
}

export type UserType = UserItemType[]

const initialPeople: UserType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: any) => (
        <div key={p._id} className={style.user__item}>
            <span style={{color: 'white'}}>{p.name}</span>
            <span style={{color: `${p.age >= 18 ? 'green' : 'red'}`}}>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAC()))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, checkAgeAC()))

    return (
        <div className={style.container__wrapper}>
            <hr/>
            <h3>homeworks 8</h3>

            {/*should work (должно работать)*/}
            <div className={style.container}>
                <div className={style.users__listWrapper}>
                    {finalPeople}
                </div>
                <div className={style.sort__buttonsWrapper}>
                    <SuperButton onClick={sortUp}>sort up</SuperButton>
                    <SuperButton onClick={sortDown}>sort down</SuperButton>
                    <SuperButton onClick={checkAge}>check18</SuperButton>
                </div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
