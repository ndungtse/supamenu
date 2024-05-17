import { View, Text } from 'react-native'
import React from 'react'
import { ThemedText } from '../core/ThemedText'

interface Props {
    item: any
}

const Product = ({ item }: Props) => {
    return (
        <View className="p-3 bg-gray-400/10 flex-col rounded-md items-center">
            <View className="w-full h-24 rounded-md overflow-hidden">
                <View className="bg-gray-300 w-full h-full"></View>
            </View>
            <View className="flex-1 ml-3">
                <ThemedText className="font-bold">{item.name}</ThemedText>
                <ThemedText className="text-sm text-gray-400">Price: {item.price}</ThemedText>
            </View>
        </View>
    )
}

export default Product