import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import style from './Greeting.module.css'


type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (el: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (value:string) => {
        setError('')
        setName(value)
    }
    const addUser = () => {
        if (!name) {
            setError('Please enter user name')
        } else {
            addUserCallback(name);
            alert(`Hello ${name} !`)
            setName('');
        }
    }

    let totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />

    )
}

export default GreetingContainer
