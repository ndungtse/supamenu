import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/core/ThemedText'
import { ThemedView } from '@/components/core/ThemedView'
import { ArrowIcon } from '@/components/icons'
import { router } from 'expo-router'

const orders = [
  {
    date: '2021-09-01',
    status: 'Delivered',
    total: 100,
    items: [
      {
        name: 'Pizza',
        quantity: 1,
        price: 50,
      },
      {
        name: 'Pasta',
        quantity: 1,
        price: 50,
      },
    ],
  },
];

const Orders = () => {
  return (
    <ThemedView className=" flex-col flex-1 w-full p-4 gap-y-3">
      <View className="flex flex-row justify-between items-center">
        <Pressable
          onPress={() => router.back()}
          className="flex w-9 h-9 rounded-full justify-center items-center flex-col p-2 border border-primary"
          style={{ transform: [{ rotate: "180deg" }] }}
        >
          <ArrowIcon size={20} />
        </Pressable>
        <View className="flex-row w-full ml-4 items-start">
          <ThemedText className=" font-bold text-lg">Orders</ThemedText>
        </View>
      </View>
      <ScrollView className='flex-1 flex-col'>
        {orders.map((order, i) => (
          <OrderItem order={order} key={i} />
        ))}
      </ScrollView>
    </ThemedView>
  )
}

const OrderItem = ({ order }: { order: any }) => {
  return (
    <View className="flex-col mt-3 w-full p-3 py-2 rounded-md bg-gray-400/10">
      <View className="flex-row w-full justify-between items-center">
        <View className="flex-row w-full flex-1 gap-x-2 items-center">
          <View className="flex-col items-baseline py-1">
            <ThemedText className=" text-xs font-bold text-primary ml-1">
              {order.date}
            </ThemedText>
            <ThemedText className=" text-xs text-gray-500 ml-1">
              {order.status}
            </ThemedText>
          </View>
        </View>
        <ArrowIcon size={20} />
      </View>
      <View className="flex-col w-full mt-2">
        {order.items.map((item: any, i: number) => (
          <OrderItemItem item={item} key={i} />
        ))}
        <View className="flex-row w-full justify-between items-center mt-2">
          <ThemedText className=" text-xs font-bold">Total</ThemedText>
          <ThemedText className=" text-xs text-gray-500">
            ${order.total}
          </ThemedText>
        </View>
      </View>
    </View>
  )
}

const OrderItemItem = ({ item }: { item: any }) => {
  return (
    <View className="flex-row w-full justify-between items-center mt-2">
      <ThemedText className=" text-xs font-bold">{item.name}</ThemedText>
      <ThemedText className=" text-xs text-gray-500">
        {item.quantity} x ${item.price}
      </ThemedText>
    </View>
  )
}

export default Orders