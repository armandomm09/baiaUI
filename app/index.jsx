import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { images } from '../constants'
import { icons } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'
import { useGlobalContext } from '@/context/GlobalProvider'
import {MeshGradient} from 'react-native-mesh-gradient'

export default function App() {

  const { isLoading, isLoggedIn} = useGlobalContext()

  if(!isLoading && isLoggedIn) return <Redirect href='/home' />
  
  const points = [
    [0.0, 0.0], [0.2, 0.0], [0.4, 0.0],
    [0.0, 0.2], [0.2, 0.2], [0.4, 0.2],
    [0.0, 0.4], [0.2, 0.4], [0.4, 0.4],
];

const primaryColors = [
  "#ff5e40", "#3051e0", "#ff5e40",
  "#3051e0", "#ff5e40", "#3051e0",
  "#ff5e40", "#3051e0", "#ff5e40",
];

const secondaryColors = [
  "#3051e0", "#ff5e40", "#3051e0",
  "#ff5e40", "#3051e0", "#ff5e40",
  "#3051e0", "#ff5e40", "#3051e0",
];

  return (
    <LinearGradient
      colors={['#3051e0', '#ff5e40']}
      start={[0, 1]}
      end={[1, 0]}
    >
      <SafeAreaView className=' h-full'>
        <ScrollView>

          <View className=' py-[70%] flex-1 items-center justify-center'>
            <View className=' w-full items-center justify-center'>
              <TouchableOpacity activeOpacity='0.7' onPress={() => router.push('/sign-in')}>
                <Image source={images.logoNoBGPrimary} className=' rounded-3xl h-52 w-52' resizeMode='contain' />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>


  )
}
