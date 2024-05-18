import { View, Text, Pressable } from 'react-native'
import React from 'react'

interface ButtonProps extends React.ComponentProps<typeof Pressable> {
    color?: string;
}

const Button = (props: ButtonProps) => {
    const { color, children, disabled, ...rest } = props
  return (
    <Pressable {...rest}>
      <Text>Button</Text>
    </Pressable>
  )
}

export default Button