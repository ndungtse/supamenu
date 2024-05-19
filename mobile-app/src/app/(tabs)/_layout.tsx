import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import CustomStatusBar from '@/components/core/CustomStatusBar';
import { Platform, StyleSheet, View } from 'react-native';
import TabBarIcon from '@/components/navigation/TabBarIcon';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useApp } from '@/conntexts/AppProvider';

export default function TabLayout() {
  const { colorScheme } = useApp();
  const isIos = Platform.OS === 'ios';

  const _tabBarStyle = isIos ? styles.tabBarIos : styles.tabBarAndroid;
  return (
    <SafeAreaProvider style={{ backgroundColor: Colors[colorScheme].color }}>
      <CustomStatusBar />
      <Tabs

        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarBackground: () => <View className=' bg-blue500 flex-1' />,
          tabBarStyle: {
            // borderRadius: 10,
            backgroundColor: Colors[colorScheme ?? 'light'].tabBg,
            borderTopColor: 'transparent',
            borderRadius: 50,
            marginBottom: 10,
            // marginVertical: 'auto',
            ..._tabBarStyle,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon focused={focused}>
                <MaterialIcons name="home" size={35} color={color} />
              </TabBarIcon>
            ),
          }} />
        <Tabs.Screen
          name="notifications"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon focused={focused}>
                <MaterialIcons name="notifications" size={35} color={color} />
              </TabBarIcon>
            ),
          }} />
        <Tabs.Screen
          name="restaurants"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon focused={focused}>
                <FontAwesome5 name="hotel" size={24} color={color} />
              </TabBarIcon>
            ),
          }} />
        <Tabs.Screen
          name="orders"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon focused={focused}>
                <MaterialIcons name="timeline" size={35} color={color} />
              </TabBarIcon>
            ),
          }} />
        <Tabs.Screen
          name="cart"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon focused={focused}>
                <MaterialIcons name="shopping-cart" size={35} color={color} />
              </TabBarIcon>
            )
          }} />
      </Tabs></SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBarIos: {
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    paddingTop: 20,
    height: 80,
  },
  tabBarAndroid: {
    height: 70,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
});