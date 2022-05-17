import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from "../../p1-main/m1-ui/u1-app/App.module.css";

function HW11() {

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const changeRange = ([value1, value2]: number[]) => {
        if (value1 <= value2) {
            setValue1(value1)
            setValue2(value2)
        }
    }


    return (
        <div>
            <hr/>
            <h3>homeworks 11</h3>

            {/*should work (должно работать)*/}
            <div className={style.container}>
                <div className={style.changeRangeWrapper}>
                    <div style={{width: '7%', textAlign: 'center'}}>
                        <span>{value1}</span>
                    </div>
                    <SuperRange
                        onChangeRange={setValue1}
                        currentValue={value1}
                        maxValue={value2}
                    />
                    <div style={{width: '7%', textAlign: 'center'}}>
                        <span>100</span>
                    </div>
                </div>


                <div className={style.changeRangeWrapper}>
                    <div style={{width: '7%', textAlign: 'center'}}>
                        <span>{value1}</span>
                    </div>
                    <SuperDoubleRange
                        onChangeRange={changeRange}
                        values={[value1, value2]}
                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <div style={{width: '7%', textAlign: 'center'}}>
                        <span>{value2}</span>
                    </div>

                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
