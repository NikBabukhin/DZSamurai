import React from 'react'
import Clock from './Clock'
import style from "../../p1-main/m1-ui/u1-app/App.module.css";

function HW9() {
    return (
        <div className={style.container__wrapper}>
            <hr/>
            <h3>homeworks 9</h3>
            <div className={style.container}>
                {/*should work (должно работать)*/}
                <Clock/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
