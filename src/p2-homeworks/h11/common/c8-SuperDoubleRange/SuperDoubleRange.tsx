import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import style from "../../../../p1-main/m1-ui/u1-app/App.module.css"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    values: [number, number]
    min?: number,
    max?: number,
    step?: number,
    disable?: boolean,
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, values,
        onChange,
        min, max, step, disable,

        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки

    const onChangeLeftCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)

        onChangeRange && onChangeRange([+e.currentTarget.value, values[1]])
    }

    const onChangeRightCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)

        onChangeRange && onChangeRange([values[0], +e.currentTarget.value])
    }


    return (
        <div className={style.inputsRangeWrapper}>
            <input
                min={min}
                max={max}
                type={'range'}
                onChange={onChangeLeftCallback}
                value={values[0]}
                className={`${style.inputRange} ${style.inputMin}`}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <input
                min={min}
                max={max}
                type={'range'}
                onChange={onChangeRightCallback}
                value={values[1]}
                className={`${style.inputRange} ${style.inputMax}`}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </div>
    )
}

export default SuperDoubleRange
