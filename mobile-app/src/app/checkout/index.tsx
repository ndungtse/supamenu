import CustomStatusBar from '@/components/core/CustomStatusBar'
import { ThemedText } from '@/components/core/ThemedText'
import { ThemedView } from '@/components/core/ThemedView'
import { ArrowIcon } from '@/components/icons'
import OrderSuccessful from '@/components/in_screens/OrderSuccessful'
import { cn } from '@/utils/cn'
import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

const Checkout = () => {
    const [ordered, setOrdered] = React.useState(false)
    const mobilePayments = ['MTN Mobile Money', 'Airtel Money', 'Vodafone Cash']

    const onOrder = () => {
        console.log('Ordering...')
        setOrdered(true)
        // setTimeout(() => {
        //     setOrdered(false)
        //     router.push('/orders')
        // }, 3000)
    }
    return (
        <>
            {ordered && <OrderSuccessful />}
            <CustomStatusBar />
            <ThemedView className=" flex-col flex-1">
                <View className="flex flex-row p-2 justify-between items-center">
                    <Pressable
                        onPress={() => router.back()}
                        className="flex w-9 h-9 rounded-full justify-center items-center flex-col p-2 border border-primary"
                        style={{ transform: [{ rotate: "180deg" }] }}
                    >
                        <ArrowIcon size={20} />
                    </Pressable>
                </View>
                <ScrollView className='flex-1 flex-col '>
                    <ThemedView className='flex-col p-4 pb-14'>
                        <View className='flex-row justify-between'>
                            <ThemedText className='text-xl font-bold'>Checkout</ThemedText>
                            <View className='flex-col'>
                                <ThemedText className='text-primary'>Total: $100</ThemedText>
                                <ThemedText className='text-gray-500 text-sm'>Including VAT (18%)</ThemedText>
                            </View>
                        </View>
                        <View className=' absolute w-full -bottom-10 right-4'>
                            {/* <Pressable className='flex-row bg-primary p-2 rounded-md items-center justify-center'>
                                    <ThemedText className='text-white'>Pay</ThemedText>
                            </Pressable> */}
                            <CheckoutTabs data={['Credit Card', 'Mobile']} />
                        </View>
                    </ThemedView>
                    <ThemedView className='flex-col p-4 mt-11'>
                        {/* <ThemedText className='text-lg font-bold'>Mobile Payments</ThemedText> */}
                        {mobilePayments.map((payment) => (
                            <View key={payment} className='flex-row mt-6 rounded-md bg-gray-400/10  items-center flex-1'>
                                <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ width: 50, height: 50 }} />
                                <Pressable key={payment} className='flex-1 p-3 text-center flex-row justify-center'>
                                    <ThemedText>{payment}</ThemedText>
                                </Pressable>
                            </View>
                        ))}
                        <Text className='text-sm text-gray-400 mt-4 text-center font-bold p-4'>
                            We will send you an order details to your email after successful payment
                        </Text>
                        <Pressable onPress={onOrder} className='flex-row mt-6 rounded-md p-3 bg-primary justify-center items-center'>
                            <ThemedText className='text-white text-lg'>Pay for the order</ThemedText>
                        </Pressable>
                    </ThemedView>
                </ScrollView>
            </ThemedView>
        </>
    )
}

const CheckoutTabs = ({ data }: { data: string[] }) => {
    const [activeTab, setActiveTab] = React.useState(0)
    return (
        <View className='flex-row '>
            {data.map((tab, i) => {
                const translate = i === 0 ? 'translate-x-2' : '-translate-x-2'
                return (
                    <Pressable key={i} onPress={() => setActiveTab(i)} className={cn(translate, `flex-1 p-2 py-6 rounded-xl items-center justify-center ${activeTab === i ? 'bg-primary' : 'bg-gray-400/10'}`)}>
                        <ThemedText className={cn(activeTab === i ? 'text-white' : 'text-black', ' font-semibold')}>{tab}</ThemedText>
                    </Pressable>
                )
            })}
        </View>
    )
}

export default Checkout