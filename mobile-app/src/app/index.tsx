import { Colors } from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button, Pressable, Text, View } from 'react-native'

const IndexPage = () => {
    const router = useRouter()
    return (
        <>
            <StatusBar style="light" backgroundColor={Colors.primary} />
            <View className='flex-1 items-center justify-center bg-primary'>
                <View className='flex flex-row items-center justify-center'>
                    <Text className=' text-4xl font-bold'>Supa</Text>
                    <Text className=' text-4xl text-white font-bold'>Menu</Text>
                </View>
                <Text className='text-white text-xl'>Welcome to SupaMenu</Text>
                <Pressable
                    onPress={() => router.push('/login')}
                    className='bg-white w-fit flex-row gap-x-2 items-center justify-center absolute bottom-11 text-primary p-3 px-8 pb-3.5 rounded-[120px] mt-3'>
                    <Text className='text-primary text-lg font-bold'>Get Started</Text>
                    <AntDesign name="arrowright" size={24} color={Colors.primary} />
                </Pressable>
            </View>
        </>
    )
}

export default IndexPage