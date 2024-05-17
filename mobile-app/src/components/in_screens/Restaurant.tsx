import { View, Text } from 'react-native'
import React from 'react'
import { ThemedText } from '../core/ThemedText'

interface RestaurantProps {
    restaurant: any;
}

const Restaurant = ({ restaurant }: RestaurantProps) => {
    return (
        <View className="p-3 bg-gray-400/10 rounded-md mt-3 flex-row items-center">
            <View className="w-24 h-24 rounded-md overflow-hidden">
                <View className="bg-gray-300 w-full h-full"></View>
            </View>
            <View className="flex-1 ml-3">
                <ThemedText className="font-bold">{restaurant.name}</ThemedText>
                <ThemedText className="text-sm text-gray-400">Rating: {restaurant.rating}</ThemedText>
                <ThemedText className="text-sm text-gray-400">Distance: {restaurant.distance}km</ThemedText>
            </View>
        </View>
    )
}

export default Restaurant