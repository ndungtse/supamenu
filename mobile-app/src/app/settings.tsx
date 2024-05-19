import CustomStatusBar from '@/components/core/CustomStatusBar'
import { ThemedText } from '@/components/core/ThemedText'
import { ThemedView } from '@/components/core/ThemedView'
import { ArrowIcon } from '@/components/icons'
import { useApp } from '@/conntexts/AppProvider'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, Switch, Text, View } from 'react-native'

const Settings = () => {
    const { setColorScheme, colorScheme } = useApp()

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
                        <ThemedText className=" font-bold text-lg">Settings</ThemedText>
                    </View>
                </View>
                <View className='f mt-4 items-center bg-gray-400/10 justify-between flex-row px-3 py-2 rounded-md'>
                    <View className='flex-row items-center flex-1'>
                        <Text className='text-primary text-lg ml-3'>Dark Mode</Text>
                    </View>
                    {/* <Pressable onPress={toggleColorScheme}>
                        <Text className='text-primary text-lg ml-3'>{colorScheme === 'dark' ? 'On' : 'Off'}</Text>
                    </Pressable> */}
                    <Switch
                        // trackColor={Colors.primary}
                        trackColor={{ true: Colors.primary }}
                        thumbColor={"#f4f3f4"}
                        value={colorScheme === 'dark'}
                        onValueChange={(val) => setColorScheme(val ? 'dark' : 'light')}
                    />
                </View>
            </ThemedView>
        </>
    )
}

export default Settings