import { View, Text, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterScreen = () => {
    const [data, setData] = React.useState({
        fullNames: '',
        phoneNumber: '',
        email: '',
        password: '',
    });
    return (

        <View className=' bg-primary flex-1 pt-20'>
            <View className=' bg-white rounded-t-[30px] flex-1'>
                <View className='flex flex-row mt-6 items-center justify-center'>
                    <Text className=' text-4xl font-bold'>Supa</Text>
                    <Text className=' text-4xl text-primary font-bold'>Menu</Text>
                </View>
                <Text className='font-bold mt-8 text-center'>Welcome ...</Text>
                <ScrollView className='flex-1 px-3'>
                    <Text className='font-bold mt-1 opacity-50 text-sm text-center'>Please fill in the information</Text>
                    <View className='mt-8 flex-row items-center border-2 border-gray-300 p-1 rounded-md'>
                        <Feather name="user" size={28} color="gray" />
                        <TextInput onChangeText={(text) => setData({ ...data, fullNames: text })}
                            placeholderTextColor={'gray'}
                            style={{
                                fontSize: 16,
                            }}
                            className=' w-full flex-row items-center outline-none p-2' placeholder='Your Full Names' />
                    </View>
                    <View className='mt-4 flex-row items-center border-2 border-gray-300 p-1 rounded-md'>
                        <Feather name="phone" size={28} color="gray" />
                        <TextInput onChangeText={(text) => setData({ ...data, phoneNumber: text })}
                            placeholderTextColor={'gray'}
                            style={{
                                fontSize: 16,
                            }}
                            className=' w-full flex-row items-center outline-none p-2' placeholder='Your Phone Number' />
                    </View>
                    <View className='mt-4 flex-row items-center border-2 border-gray-300 p-1 rounded-md'>
                        <Feather name="mail" size={28} color="gray" />
                        <TextInput onChangeText={(text) => setData({ ...data, email: text })}
                            placeholderTextColor={'gray'}
                            style={{
                                fontSize: 16,
                            }}
                            className=' w-full flex-row items-center outline-none p-2' placeholder='Your Email' />
                    </View>
                    <View className='mt-4 flex-row items-center border-2 border-gray-300 p-1 rounded-md'>
                        <Feather name="lock" size={28} color="gray" />
                        <TextInput onChangeText={(text) => setData({ ...data, password: text })}
                            placeholderTextColor={'gray'}
                            secureTextEntry
                            style={{
                                fontSize: 16,
                            }}
                            className=' w-full flex-row items-center outline-none p-2' placeholder='Your Password' />
                    </View>
                    <Pressable
                        onPress={() => console.log(data)}
                        className='bg-primary w-full flex-row  items-center justify-center mt-6 p-3 px-8 rounded-md'>
                        <Text className='text-white text-lg font-bold'>Sign in</Text>
                    </Pressable>
                    <Text className='text-center mt-8 text-gray-400'>Already have an account? <Link href={'/login'} className='text-primary font-bold'>Sign in</Link></Text>
                </ScrollView>
            </View>
        </View>
    )
}

export default RegisterScreen