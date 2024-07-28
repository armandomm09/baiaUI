import { View, Text, Image } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className=' items-center justify-center '>
      <Image
        source={icon}
        resizeMode='contain'
        className='w-6 h-6'
        tintColor={color}
      />
      <Text style={{color: color}} className={`${focused ? ' font-psemibold' : ' font-pregular'} text-xs`} >{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
      screenOptions={{ 
          tabBarShowLabel: false, 
          tabBarActiveTintColor: '#ff5e40',
          tabBarInactiveTintColor: '#3051e0',
          tabBarStyle: {
            backgroundColor: 'transparent',
            borderTopWidth: 1,
            borderTopColor: 'transparent',
            height: 84
          }
          }}
      >
      <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused} />
            }
          }}
        />
      <Tabs.Screen
          name='orders'
          options={{
            title: 'Orders',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return <TabIcon
                icon={icons.orders}
                color={color}
                name="Orders"
                focused={focused} />
            }
          }}
        />
      <Tabs.Screen
          name='sells'
          options={{
            title: 'Sells',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return <TabIcon
                icon={icons.sells}
                color={color}
                name="Sells"
                focused={focused} />
            }
          }}
        />
      <Tabs.Screen
          name='products'
          options={{
            title: 'Products',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return <TabIcon
                icon={icons.products}
                color={color}
                name="Products"
                focused={focused} />
            }
          }}
        />
      <Tabs.Screen
          name='business'
          options={{
            title: 'Business',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return <TabIcon
                icon={icons.store}
                color={color}
                name="Business"
                focused={focused} />
            }
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout