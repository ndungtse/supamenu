import CustomStatusBar from '@/components/core/CustomStatusBar'
import { ThemedView } from '@/components/core/ThemedView'
import { ArrowIcon } from '@/components/icons'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, ScrollView, View } from 'react-native'

const Checkout = () => {
    return (
        <>
            <CustomStatusBar />
            <ThemedView className=" flex-col flex-1">
                <View className="flex flex-row p-2 justify-between items-center">
                    <Pressable
                        onPress={() => router.back()}
                        className="flex w-9 h-9 rounded-full justify-center items-center flex-col p-2 border border-primary"
                        style={{ transform: [{ rotate: "180deg" }] }}
                    >
                        <ArrowIcon size={20} />
                    </Pressable>
                </View>
                <ScrollView className='flex-1 flex-col'></ScrollView>
            </ThemedView>
        </>
    )
}

export default Checkout