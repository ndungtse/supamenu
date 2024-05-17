import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/core/ThemedText'
import { ThemedView } from '@/components/core/ThemedView'
import { ArrowIcon } from '@/components/icons'
import { router } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons'

const cartItems = [
  {
    name: 'Pizza',
    image: 'https://via.placeholder.com/150',
    quantity: 1,
    price: 50,
  },
  {
    name: 'Pasta',
    quantity: 1,
    image: 'https://via.placeholder.com/150',
    price: 50,
  },
];

const Cart = () => {
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
          <ThemedText className=" font-bold text-lg">Cart</ThemedText>
        </View>
      </View>
      <ScrollView className='flex-1 flex-col'>
        {cartItems.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
        <Pressable onPress={()=> router.push('/checkout')} className='flex-row mt-6 rounded-md p-3 bg-primary justify-center items-center'>
          <ThemedText className=' text-white text-lg'>Checkout</ThemedText>
        </Pressable>
      </ScrollView>
    </ThemedView>
  )
}

const CartItem = ({ item }: { item: any }) => {
  return (
    <View className="flex-row w-full mt-3 justify-between items-center p-3 py-2 rounded-md bg-gray-400/10">
      <View className="flex-row w-full flex-1 gap-x-2 items-center">
        <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
        <View className="flex-col items-baseline py-1">
          <ThemedText className=" text-xs font-bold text-primary ml-1">
            {item.name}
          </ThemedText>
          <ThemedText className=" text-xs text-gray-500 ml-1">
            Quantity: {item.quantity}
          </ThemedText>
          <ThemedText className=" text-xs text-gray-500 ml-1">
            Price: {item.price}
          </ThemedText>
        </View>
      </View>
      {/* remove from cart */}
      <FontAwesome6 name='trash' size={20} color='gray' />
    </View>
  )
}

export default Cart