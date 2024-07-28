import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'

const CustomButton = ({ title, backgroundColor }) => {
  return (
    <>
      {backgroundColor === 'white' ? (
        <View className='w-full'>
          <TouchableOpacity
            className={` flex-row flex-1 items-center justify-center py-2 rounded-lg w-full bg-gray-200 `}
          >
          <Image source={icons.googleLogo} className='h-6 w-6 mr-4' resizeMode='contain'/>
            <Text className=' text-gray-800 font-pmedium'>{title}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className='w-full'>
          <TouchableOpacity
          activeOpacity={0.7}

            className={`flex-1 items-center justify-center py-2 rounded-lg w-full 
            ${backgroundColor === 'blue' ? ' bg-secondary' : 'bg-myblack'}
        `}
          >
            <Text className='text-white font-pmedium'>{title}</Text>
          </TouchableOpacity>
        </View>
      )

      }
    </>

  )
}

export default CustomButton