import Expandable from '@/components/core/Expandable'
import { ThemedText } from '@/components/core/ThemedText'
import { ThemedView } from '@/components/core/ThemedView'
import PullRefresh from '@/components/core/inputs/PullRefresh'
import { ArrowIcon } from '@/components/icons'
import Restaurant from '@/components/in_screens/Restaurant'
import { useApp } from '@/conntexts/AppProvider'
import { Colors } from '@/constants/Colors'
import { useGet } from '@/hooks/useGet'
import { IRestaurant } from '@/types/schema'
import { cn } from '@/utils/cn'
import { FontAwesome5 } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { Pressable, RefreshControl, ScrollView, TextInput, View } from 'react-native'

const Restaurants = () => {
  const router = useRouter();
  const { colorScheme } = useApp()
  const [isExpanded, setIsExpanded] = React.useState(false)
  const { data: restaurants, loading: restLoading, getData: getRestaurants } = useGet<IRestaurant[]>('/restaurant')
  const [filteredRestaurants, setFilteredRestaurants] = React.useState<IRestaurant[]>(restaurants ?? [])

  const onSearch = (query: string) => {
    const filtered = restaurants?.filter((item) => {
      const jsonStr = JSON.stringify(item)
      return jsonStr.includes(query)
    })
    setFilteredRestaurants(filtered ?? [])
  }

  const onRefresh = () => {
    getRestaurants()
  }

  useEffect(() => {
    setFilteredRestaurants(restaurants ?? [])
    // return () => {
    //   setIsExpanded(false)
    // }
  }, [restaurants])
  return (
    <ThemedView className='flex-1'>
      <View className="flex p-2 pb-1 flex-row justify-between items-center">
        <Pressable
          onPress={() => router.back()}
          className="flex w-9 h-9 rounded-full justify-center items-center flex-col p-2 border border-primary"
          style={{ transform: [{ rotate: "180deg" }] }}
        >
          <ArrowIcon size={20} />
        </Pressable>
        <View className="flex-row flex-1 ml-4 items-start justify-between">
          <ThemedText className={cn(" font-bold text-lg", isExpanded ? "hidden" : '')}>Restaurants</ThemedText>
          <Expandable
            onExpand={(exp) => setIsExpanded(exp)}
            // style={{backgroundColor: Colors[colorScheme].background}}
            className={cn(' flex-row p-2', isExpanded ? ' flex-1 bg-gray-400/10 ' : '')}
            rightSection={<FontAwesome5 name="search" size={20} color={Colors.primary} />}>
            <TextInput
              cursorColor={Colors.primary}
              style={{ color: Colors[colorScheme].text }}
              onChangeText={onSearch} autoFocus className='flex-1' placeholder="Search ..." />
          </Expandable>
        </View>
      </View>
      <ScrollView className='flex-col flex-1 '
        refreshControl={<PullRefresh
          refreshing={restLoading}
          onRefresh={onRefresh}
        />
        }
      >
        {/* <ThemedText >kkk</ThemedText> */}
        {restLoading && <ThemedText className=' text-center mt-3'>Loading ...</ThemedText>}
        {filteredRestaurants?.map((item, i) => (
          <Restaurant restaurant={item} key={item.id} />
        ))}
        {/* <FlatList
          data={filteredRestaurants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Restaurant restaurant={item} />}
        /> */}
      </ScrollView>
    </ThemedView>
  )
}

export default Restaurants