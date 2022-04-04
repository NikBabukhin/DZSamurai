import React from 'react'
import style from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string,
    setNameCallback: (value:string) => void,
    addUser: () => void,
    error: string,
    totalUsers: number,
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация
) => {
    const inputClass = error ? style.error : ""


    const onChangeTextCallBack = (value:string)=> {
        setNameCallback(value)
    }

    return (
        <div className={style.greeting__wrapper}>
            <SuperInputText
                className={inputClass}
                value={name}
                onChangeText={onChangeTextCallBack}
                error={error}
                spanClassName={style.error__span}
                placeholder={'Enter your name...'}
            />
            <SuperButton onClick={addUser}>add</SuperButton>
            <span className={style.total__users}>{totalUsers}</span>
        </div>
    )
}

export default Greeting

