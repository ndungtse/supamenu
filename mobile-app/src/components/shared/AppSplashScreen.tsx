import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '@/constants/Colors'

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