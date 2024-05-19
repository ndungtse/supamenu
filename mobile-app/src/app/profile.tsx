import CustomStatusBar from '@/components/core/CustomStatusBar'
import { ThemedText } from '@/components/core/ThemedText'
import { ThemedView } from '@/components/core/ThemedView'
import { ArrowIcon } from '@/components/icons'
import { useAuth } from '@/conntexts/AuthProvider'
import { Colors } from '@/constants/Colors'
import useStorage from '@/hooks/useStorage'
import { AntDesign, FontAwesome6 } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const Profile = () => {
    const { user, setToken, setUser } = useAuth()
    const { removeData } = useStorage()

    const logout = () => {
        removeData('token')
        setToken(null)
        setUser(null)
        router.push('/login')
    }

    return (
        <>
            <CustomStatusBar />
            <ThemedView className='flex-1 p-2 items-baseline'>
                <View className="flex flex-row justify-between items-center">
                    <Pressable
                        onPress={() => router.back()}
                        className="flex w-9 h-9 rounded-full justify-center items-center flex-col p-2 border border-primary"
                        style={{ transform: [{ rotate: "180deg" }] }}
                    >
                        <ArrowIcon size={20} />
                    </Pressable>
                    <View className="flex-row w-full ml-4 items-start">
                        <ThemedText className=" font-bold text-lg">Profile</ThemedText>
                    </View>
                </View>
                <ThemedText className='text-lg font-bold mt-3'>Hello, {user?.fullName}</ThemedText>
                <ThemedText className='text-gray-400'>What would you like to do today?</ThemedText>
                <Pressable onPress={() => router.push('/orders')} className=' mt-4 items-center bg-gray-400/10 justify-between flex-row px-3 py-2 rounded-md'>
                    <View className='flex-row items-center flex-1'>
                        <AntDesign name="shoppingcart" size={24} color={Colors.primary} />
                        <Text className='text-primary text-lg ml-3'>Orders</Text>
                    </View>
                    <FontAwesome6 name='chevron-right' size={20} color={Colors.primary} />
                </Pressable>
                <Pressable onPress={() => router.push('/settings')} className=' mt-4 items-center bg-gray-400/10 justify-between flex-row px-3 py-2 rounded-md'>
                    <View className='flex-row items-center flex-1'>
                        <AntDesign name="setting" size={24} color={Colors.primary} />
                        <Text className='text-primary text-lg ml-3'>Settings</Text>
                    </View>
                    <FontAwesome6 name='chevron-right' size={20} color={Colors.primary} />
                </Pressable>
                <Pressable onPress={logout} className=' mt-4 items-center flex-row px-3 py-1 rounded-md'>
                    <AntDesign name="logout" size={24} color={Colors.primary} />
                    <Text className='text-primary text-lg ml-3'>Logout</Text>
                </Pressable>
            </ThemedView></>
    )
}

export default Profile