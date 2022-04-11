import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[],
    onChangeOption?: (option: string) => void,
    radioStyle?: string,
    radioInputStyle?: string,
    activeInputClass?:string
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        radioStyle, radioInputStyle,
        activeInputClass,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (/* map options with key*/
        <label key={name + '-' + i} className={`${radioStyle} ${o === value? activeInputClass : ''}`}>
            <input
                className={radioInputStyle}
                type={'radio'}
                value={o}
                onChange={onChangeCallback}
                checked={o === value}
                name={o}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
