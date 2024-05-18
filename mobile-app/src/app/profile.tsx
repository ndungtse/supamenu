import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/core/ThemedText'
import { ThemedView } from '@/components/core/ThemedView'
import { useAuth } from '@/conntexts/AuthProvider'
import useStorage from '@/hooks/useStorage'
import { router } from 'expo-router'
import CustomStatusBar from '@/components/core/CustomStatusBar'
import { ArrowIcon } from '@/components/icons'
import { AntDesign } from '@expo/vector-icons'

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
            <ThemedView className='flex-1 items-baseline'>
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
                <Pressable onPress={logout} className='bg-gray-400/30 mt-4 items-center flex-row p-3 rounded-md'>
                    <AntDesign name="logout" size={24} color="white" />
                    <Text className='text-white text-lg ml-3'>Logout</Text>
                </Pressable>
            </ThemedView></>
    )
}

export default Profile