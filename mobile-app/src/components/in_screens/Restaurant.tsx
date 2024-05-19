import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { ThemedText } from '../core/ThemedText';
import { IRestaurant } from '@/types/schema';

interface RestaurantProps {
    restaurant: IRestaurant;
}

const RestaurantTile = ({ restaurant }: RestaurantProps) => {
    const router = useRouter();
    return (
        <Pressable onPress={() => router.push(`/restaurant/${restaurant.id}`)}>
            <View className="p-3 bg-gray-400/10 rounded-md mt-3 flex-row items-center">
                <View className="w-24 h-24 rounded-md overflow-hidden">
                    <View className="bg-gray-300 w-full h-full">
                        <Image source={{ uri: restaurant.image }} style={{ width: '100%', height: '100%' }} className=' object-cover' />
                    </View>
                </View>
                <View className="flex-1 ml-3">
                    <ThemedText className="font-bold">{restaurant.name}</ThemedText>
                    <ThemedText className="text-sm text-gray-400">Rating: {restaurant.rating}</ThemedText>
                    <ThemedText className="text-sm text-gray-400">Address: {restaurant.address}</ThemedText>
                </View>
            </View>
        </Pressable>
    )
}

export default RestaurantTile