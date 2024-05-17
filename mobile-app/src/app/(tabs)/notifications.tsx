import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/core/ThemedView'
import { router } from 'expo-router'
import { ThemedText } from '@/components/core/ThemedText'
import { ArrowIcon } from '@/components/icons'

const notifications = [
    {
        title: 'Order',
        message: 'Your order has been placed successfully',
    },
    {
        title: 'Order Arrived',
        message: 'Your order has arrived at your location',
    },
];

const Notifications = () => {
    return (
        <ThemedView className=" flex-col flex-1 w-full p-4 gap-y-3">
            <View className="flex flex-row justify-between items-center">
                <Pressable
                    onPress={() => router.back()}
                    className="flex w-9 h-9 rounded-full justify-center items-center flex-col p-2 border border-primary"
                    style={{ transform: [{ rotate: "180deg" }] }}
                >
                    <ArrowIcon size={20} />
                </Pressable>
                <View className="flex-row w-full ml-4 items-start">
                    <ThemedText className=" font-bold text-lg">Notifications</ThemedText>
                    <View className="flex-col ml-2 p-1 items-center justify-center w-8 bg-primary rounded-full aspect-square">
                        <ThemedText className=" text-white font-bold">
                            {notifications?.length ?? 0}
                        </ThemedText>
                    </View>
                </View>
            </View>
            <View className="flex-col w-full gap-y-3 mt-4">
                {notifications?.length === 0 && (
                    <ThemedText className=" text-center text-gray-500">
                        You have no notifications yet
                    </ThemedText>
                )}
                {notifications?.map((item, i) => (
                    <NotificationItem key={i} item={item} />
                ))}
            </View>
        </ThemedView>
    )
}
const NotificationItem = ({ item }: { item: any }) => {

    return (
        <View className="flex-col mt-3 w-full p-3 py-2 rounded-md bg-gray-400/10">
            <View className="flex-row w-full justify-between items-center">
                <View className="flex-row w-full flex-1 gap-x-2 items-center">
                    <View className="flex-col items-baseline py-1">
                        <ThemedText className=" text-xs font-bold text-primary ml-1">
                            {item.title}
                        </ThemedText>
                        <ThemedText className=" font-bold mt-1">{item.message}</ThemedText>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Notifications