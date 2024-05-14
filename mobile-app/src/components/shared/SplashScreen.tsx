import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
})

export default SplashScreen