import { View, Text } from 'react-native'
import React from 'react'
import { InputTextProps } from './InputText'

interface Props extends InputTextProps {}

const PasswordInput = (props: Props) => {
    const { ...rest } = props
  return (
    <View>
      <Text>PasswordInput</Text>
    </View>
  )
}

export default PasswordInput