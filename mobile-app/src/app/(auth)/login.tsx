import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

const LoginScreen = () => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });

  const onLogin = async() => {}

  return (
    <View className=' bg-primary flex-1'>
      <View className=' bg-white rounded-t-[30px] p-6 px-3 mt-20 flex-1'>
        <View className='flex flex-row items-center justify-center'>
          <Text className=' text-4xl font-bold'>Supa</Text>
          <Text className=' text-4xl text-primary font-bold'>Menu</Text>
        </View>
        <Text className='font-bold mt-8 text-center'>Welcome ...</Text>
        <Text className='font-bold mt-1 opacity-50 text-sm text-center'>Sign in to continue</Text>
        <View className='mt-8 flex-row items-center border-2 border-gray-300 p-1 rounded-md'>
          <Feather name="mail" size={28} color="gray" />
          <TextInput onChangeText={(text) => setData({ ...data, email: text })}
            className=' w-full mt-1 h-9 text-lg pl-2' placeholder='Your Email' />
        </View>
        <View className='mt-4 flex-row items-center border-2 border-gray-300 p-1 rounded-md'>
          <Feather name="lock" size={28} color="gray" />
          <TextInput onChangeText={(text) => setData({ ...data, password: text })}
            className=' w-full mt-1 h-9 text-lg pl-2' placeholder='Your Password' />
        </View>
        <Pressable
          onPress={() => console.log(data)}
          className='bg-primary w-full flex-row  items-center justify-center mt-6 p-3 px-8 rounded-md'>
          <Text className='text-white text-lg font-bold'>Sign in</Text>
        </Pressable>
        <View className='flex-row items-center mt-4'>
          <View className='flex-1 border-b-2 border-gray-300'></View>
          <Text className='mx-2 text-gray-400'>OR</Text>
          <View className='flex-1 border-b-2 border-gray-300'></View>
        </View>
        {/* google + facebook  */}
        <Pressable
          onPress={() => console.log('google')}
          className='bg-white border-2 border-gray-200 w-full flex-row  items-center justify-center mt-4 p-3 px-5 rounded-md'>
          <AntDesign name="google" size={24} color="black" />
          <Text className='text-gray-500 flex-1 text-center w-fit text-lg font-bold '>Sign in with Google</Text>
        </Pressable>
        <Pressable
          onPress={() => console.log('facebook')}
          className=' border-2 border-gray-200 w-full flex-row  items-center justify-center mt-4 p-3 px-5 rounded-md'>
          <FontAwesome name="facebook-f" size={24} color="black" />
          <Text className='text-gray-500 flex-1 text-center w-fit text-lg font-bold '>Sign in with Facebook</Text>
        </Pressable>
        <Link href='/forgot-password' className='text-center mt-4 text-primary font-semibold'>Forgot Password?</Link>
        <Text className='text-center mt-4 text-gray-400'>Don't have an account? <Link href={'/register'} className='text-primary font-bold'>Sign up</Link></Text>
      </View>
    </View>
  )
}

export default LoginScreen