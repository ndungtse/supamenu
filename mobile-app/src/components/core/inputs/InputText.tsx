import React from 'react'
import { TextInput, TextInputProps, TextStyle } from 'react-native'

export interface InputTextProps extends TextInputProps {
    type?: 'text' | 'password' | 'secure-text'
}

// ! styles Probably works with nativeWind only
const InputText = (props: InputTextProps) => {
    const { type, placeholderTextColor, style, autoCapitalize, className, ...rest } = props
    const { ...oStyles } = (style ?? {}) as { [key: string]: TextStyle }
    const styles = Object.keys(oStyles).map((key) => {
        if (!isNaN(Number(key))) {
            return oStyles[key]
        }
        return {}
    })
    const _style = styles.filter((style) => Object.keys(style).length > 0)
    const fontSize = _style.find((style) => style.hasOwnProperty('fontSize'))?.fontSize
    
    return (
        <>
            <TextInput
                style={[{
                    fontSize: fontSize ?? 16,
                }, ..._style]}
                autoCapitalize={autoCapitalize ?? 'none'}
                placeholderTextColor={placeholderTextColor ?? 'gray'}
                secureTextEntry={type === 'password' || type === 'secure-text'}
                // className=' w-full h9 flex-row items-center outline-none p-2'
                {...rest}
            />
        </>
    )
}

export default InputText