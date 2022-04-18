import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import style from './../../p1-main/m1-ui/u1-app/App.module.css'

const arr = ['x', 'y', 'z'];

function HW7() {
    const [value, onChangeOption] = useState(arr[0])

    return (
        <div className={style.container__wrapper}>
            <hr/>
            <h3>homeworks 7</h3>

            {/*should work (должно работать)*/}
            <div className={style.container}>
                <div className={style.select__wrapper}>
                    <SuperSelect
                        optionStyle={style.super__selectOption}
                        className={style.super__select}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
                <div className={style.radio__wrapper}>
                    <SuperRadio
                        activeInputClass={style.activeInputRadioClass}
                        radioInputStyle={style.super__radioInputStyle}
                        radioStyle={style.super__radioLabel}
                        name={'radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
