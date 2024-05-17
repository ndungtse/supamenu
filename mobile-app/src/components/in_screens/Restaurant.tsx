import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ThemedText } from '../core/ThemedText'
import { Link, useRouter } from 'expo-router';

interface RestaurantProps {
    restaurant: any;
}

const Restaurant = ({ restaurant }: RestaurantProps) => {
    const router = useRouter();
    return (
        <Pressable onPress={()=> router.push(`/restaurant/${restaurant.id}`)}>
            <View className="p-3 bg-gray-400/10 rounded-md flex-1 mt-3 flex-row items-center">
                <View className="w-24 h-24 rounded-md overflow-hidden">
                    <View className="bg-gray-300 w-full h-full"></View>
                </View>
                <View className="flex-1 ml-3">
                    <ThemedText className="font-bold">{restaurant.name}</ThemedText>
                    <ThemedText className="text-sm text-gray-400">Rating: {restaurant.rating}</ThemedText>
                    <ThemedText className="text-sm text-gray-400">Distance: {restaurant.distance}km</ThemedText>
                </View>
            </View>
        </Pressable>
    )
}

export default Restaurant