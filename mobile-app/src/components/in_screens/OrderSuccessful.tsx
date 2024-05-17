import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ThemedView } from '../core/ThemedView'
import Modal from '../core/Modal'
import { ThemedText } from '../core/ThemedText'
import { ArrowIcon } from '../icons'
import { router } from 'expo-router'

const OrderSuccessful = () => {
    return (
        <ThemedView className=" z-40 absolute w-full p-2 top-0 flex-1 items-center justify-center h-full bottom-0">
            <Text className=' text-primary font-semibold text-lg'>
                Payment Successful, Yayy!
            </Text>
            <ThemedText className=' text-center mt-4'>
                We will send you a notification when your order is ready for pickup
            </ThemedText>
            <Pressable onPress={() => router.push('/orders')} className='  p-2 mt-4 flex-row items-center'>
                <ThemedText className='text-primary font-semibold mr-3'>Check details</ThemedText>
                <ArrowIcon size={30} />
            </Pressable>
            <Pressable className=' p-2 mt-4 flex-row w-full py-3.5 items-center justify-center bg-primary rounded-md'>
                <ThemedText className='text-white font-semibold'>Download Invoice</ThemedText>
            </Pressable>
            <View className='flex flex-row items-center mt-6 justify-center'>
          <ThemedText className=' text-4xl font-bold'>Supa</ThemedText>
          <Text className=' text-4xl  font-bold text-primary'>Menu</Text>
        </View>
        </ThemedView >
    )
}

export default OrderSuccessful