import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import CustomStatusBar from '@/components/core/CustomStatusBar';
import { View } from 'react-native';
import TabBarIcon from '@/components/navigation/TabBarIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <CustomStatusBar />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarBackground: () => <Line
          tabBarStyle: {
            // borderRadius: 10,
            backgroundColor: Colors[colorScheme ?? 'light'].tabBg,
            borderTopColor: 'transparent',
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
      </Tabs></>
  );
}
