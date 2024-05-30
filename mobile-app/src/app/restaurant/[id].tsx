import { restaurants } from '@/assets/data';
import CustomStatusBar from '@/components/core/CustomStatusBar';
import { ThemedText } from '@/components/core/ThemedText';
import { ThemedView } from '@/components/core/ThemedView';
import PullRefresh from '@/components/core/inputs/PullRefresh';
import { ArrowIcon } from '@/components/icons';
import { useAuth } from '@/conntexts/AuthProvider';
import { Colors } from '@/constants/Colors';
import { useGet } from '@/hooks/useGet';
import { IRestaurant } from '@/types/schema';
import { FontAwesome6 } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';

const RestaurantId = () => {
    const { id } = useLocalSearchParams();
    const { AuthApi } = useAuth();
    // const restaurant = restaurants.find((r) => r.id === Number(id));
    const { data: restaurant, loading, getData } = useGet<IRestaurant>(`/restaurant/byId/${id}`)
    const router = useRouter();
    console.log('id', id)

    const menu = ["Burger", "Pizza", "Pasta", "Salad", "Drink"]
    return (
        <>
            <CustomStatusBar />
            <ThemedView className='flex-1 px-2'>
                <Pressable
                    onPress={() => router.back()}
                    className="flex w-9 h-9 rounded-full justify-center items-center flex-col p-2 border border-primary"
                    style={{ transform: [{ rotate: "180deg" }] }}
                >
                    <ArrowIcon size={20} />
                </Pressable>
                <ScrollView className='flex-col mt-4'
                    refreshControl={<PullRefresh
                        refreshing={loading}
                        onRefresh={getData}/>
                    }
                >
                    {loading ? (
                        <ThemedText className=' text-gray-500 text-center'>Loading ...</ThemedText>
                    ) : <>
                        <Text className=' text-primary text-2xl font-semibold text-center mt-10'>{restaurant?.name}</Text>
                        <View className='flex-col justify-center items-center mt-1'>
                            <ThemedText className='text-gray-500 ml-5'>Address: {restaurant?.address}</ThemedText>
                            <ThemedText className='text-gray-500'>Rating: {restaurant?.rating}</ThemedText>
                        </View>
                        <View className='flex-col px-10'>
                            <Text className=' text-primary text-2xl font-semibold text-center mt-10'>Menu</Text>
                            {menu.map((menu) => (
                                <Pressable key={menu} className=' flex-row mt-6 rounded-md p-3 bg-gray-400/10 justify-between items-center flex-1'>
                                    <ThemedText className=' text-2xl'>{menu}</ThemedText>
                                    <FontAwesome6 name='chevron-right' size={20} color='gray' />
                                </Pressable>
                            ))}
                        </View>
                    </>
                    }
                </ScrollView>
            </ThemedView>
        </>
    )
}

export default RestaurantId