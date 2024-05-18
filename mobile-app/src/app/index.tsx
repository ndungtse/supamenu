import { useAuth } from '@/conntexts/AuthProvider'
import { Colors } from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const IndexPage = () => {
    const router = useRouter()
    const { token } = useAuth()
    // if (token) {
    //     router.push('/(tabs)')
    //     return null;
    // }
    return (
        <SafeAreaView className=' flex-1' edges={[]} >
            {/* <CustomStatusBar style="light" backgroundColor={Colors.primary} /> */}
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
        </SafeAreaView>
    )
}

export default IndexPage