import { products, restaurants } from '@/assets/data';
import GridView from '@/components/core/GridView';
import { ThemedText } from '@/components/core/ThemedText';
import { ThemedView } from '@/components/core/ThemedView';
import Product from '@/components/in_screens/Product';
import Restaurant from '@/components/in_screens/Restaurant';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [query, setQuery] = React.useState('');
  const colorScheme = useColorScheme()
  // const { removeData } = useStorage()
  // removeData('token')
  return (
    <ThemedView className='flex-1'>
      <View className=" mt-2 mx-auto w-full p-3 rounded-md items-center flex-row px-5 gap-x-3">
        <FontAwesome5 name="search" size={20} color="gray" />
        {/* <MulishText className="text-black/70">Search</MulishText> */}
        <TextInput
          placeholder="Search nearest coffee"
          className="flex-1"
          placeholderTextColor="gray"
          value={query}
          onChangeText={setQuery}
        />
      </View>
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
