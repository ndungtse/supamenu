import { products, restaurants } from '@/assets/data';
import GridView from '@/components/core/GridView';
import { ThemedText } from '@/components/core/ThemedText';
import { ThemedView } from '@/components/core/ThemedView';
import Product from '@/components/in_screens/Product';
import Restaurant from '@/components/in_screens/Restaurant';
import { useAuth } from '@/conntexts/AuthProvider';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [query, setQuery] = React.useState('');
  const colorScheme = useColorScheme()
  const { user } = useAuth();
  // const { removeData } = useStorage()
  // removeData('token')
  return (
    <ThemedView className='flex-1'>
      <ThemedView className='flex-col pb-1'>
        <View className="flex-row items-center justify-between p-3">
          <View className='flex-col'>
            <ThemedText className="text-lg font-bold">Hello, {user?.fullName.slice(0, 10).split(' ')[0]}</ThemedText>
            <ThemedText className="">What would you like to eat today?</ThemedText>
          </View>
          {/* Account */}
          <Pressable onPress={() => router.push('/profile')} className="border-primary border-2 p-2 rounded-full">
            <FontAwesome5 name="user-alt" size={30} color="gray" />
          </Pressable>
        </View>
        <View className=" mt-2 mx-auto w-full bg-gray-400/10 p-3 rounded-md items-center flex-row px-5 gap-x-3">
          <FontAwesome5 name="search" size={20} color="gray" />
          {/* <MulishText className="text-black/70">Search</MulishText> */}
          <TextInput
            placeholder="Search restaurants or products"
            className="flex-1"
            placeholderTextColor="gray"
            value={query}
            onChangeText={setQuery}
          />
        </View>
      </ThemedView>
      <ScrollView className="p-3">
        <View className="flex-row items-center">
          <FontAwesome5 name="hotjar" size={20} color={Colors[colorScheme].icon} />
          <ThemedText className="text-lg font-bold ml-2">Popular Restaurants</ThemedText>
        </View>
        <View className='flex-1 flex-col'>
          {restaurants.map((item) => (
            <Restaurant restaurant={item} key={item.id} />
          ))}
        </View>
        <View className='flex-1 flex-col'>
          <View className="flex-row mt-3 items-center">
            <FontAwesome5 name="hotjar" size={20} color={Colors[colorScheme].icon} />
            <ThemedText className="text-lg font-bold ml-2">Popular Products</ThemedText>
          </View>
          <GridView
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => (
              <Product item={item} />
            )}
          />
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
