import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import style from "../../p1-main/m1-ui/u1-app/App.module.css";

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value);
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', value))
    }


    return (
        <div className={style.container__wrapper}>
            <hr/>
            <h3>homeworks 6</h3>

            <div className={style.containerHW6}>
                <div className={style.container}>
                    <SuperEditableSpan
                        className={style.superInputClass}
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...', className: style.superSpanClass}}
                    />
                </div>
                <SuperButton onClick={save} className={style.buttonsHW6}>save</SuperButton>
                <SuperButton onClick={restore} className={style.buttonsHW6}>restore</SuperButton>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
