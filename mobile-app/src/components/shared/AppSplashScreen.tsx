import { Colors } from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AppSplashScreen = () => {
  return (
    <>
    <StatusBar style="light" backgroundColor={Colors.primary} />
      <View style={styles.container} className="bg-primary items-center justify-center">
        <View className='flex flex-row items-center justify-center'>
          <Text className=' text-4xl font-bold'>Supa</Text>
          <Text className=' text-4xl text-white font-bold'>Menu</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
})

export default AppSplashScreen