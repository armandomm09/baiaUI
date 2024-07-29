import { View, Text } from 'react-native'
import React from 'react'

const OrderClip = ({order}) => {
  return (
    <View className=' px-1 self-center h-56 w-[93%] rounded-xl border border-gray-400 flex-col justify-around'>
          <View className='flex-row justify-between px-3 pt-3 items-center'>
            <Text className=' font-pregular text-xl text-gray-400'>{`${order["name"]} #${order["orderNumber"]}`}</Text>
            <View className='rounded-lg bg-secondary'>
              <Text className='text-xl font-pregular text-white py-1 px-2'>${order["orderTotal"]}</Text>
            </View>
          </View>
          <Text className=' text-base px-3 py-3 font-psemibold'>2 Hamburguesa con queso, hamburguesa hawaiana, agua de horchata, agua de ...</Text>
        </View>
  )
}

export default OrderClip