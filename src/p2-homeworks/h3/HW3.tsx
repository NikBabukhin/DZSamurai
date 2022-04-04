import React, {useState} from 'react'
import {v1} from 'uuid'
import GreetingContainer from './GreetingContainer'
import style from "../../p1-main/m1-ui/u1-app/App.module.css";


// types
export type UserType = {
    _id: string,
    name: string,
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        setUsers([{_id: v1(), name: name}, ...users])
    }

    return (
        <div className={style.container__wrapper}>
            <hr/>
            <h3>homeworks 3</h3>
            <div className={style.container}>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
