import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import { SizedBox } from 'sizedbox'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';

const SignUp = () => {
  return (
    <LinearGradient
      colors={['#3051e0', '#ff5e40']}
      start={[0, 1]}
      end={[1, 0]}
    >
      <SafeAreaView className='  h-full'>
        <ScrollView>
          <View className='flex-1 items-center justify-center'>
            <Text className=' mt-6 text-2xl font-pmedium'>Hola, Bienvenido a</Text>
            <View className=' mt-4 w-[45%] rounded-lg items-center flex-1 justify-center'>

              <Image source={images.logoNoBGPrimary} className=' my-2 h-[60px]' resizeMode='contain' />

            </View>
          </View>

          <View className='mt-8 px-6 flex-col col-span-3'>
            <Text className=' text-xl font-pbold'>Registro</Text>
            <SizedBox vertical={8} />
            <FormField
              title="Name"
              placeholder='Eg. Armando'
              keyboardType="name"
            />

            <FormField
              title="Correo"
              placeholder='Eg. baia@gmail.com'
              keyboardType="email-address"
            />

            <FormField
              title="Password"
              placeholder='Eg. 123!@#¡™£'
              keyboardType="password"
            />

            <FormField
              title="Confirm Password"
              placeholder='Eg. 123!@#¡™£'
              keyboardType="password"
            />
            <View className=' mt-2 items-center justify-center flex-1'>
              <CustomButton
                title='Registrarme'
                backgroundColor='blue'
              />
              <SizedBox vertical={6} />
              <CustomButton
                title='Continuar con google'
                backgroundColor='white'
              />
            </View>

            <View className=' mt-4 flex-row'>
              <Text className='font-pmedium'>Ya tienes cuenta?&nbsp;</Text>
              <TouchableOpacity onPress={() => router.replace('/sign-in')} >
                <Text className=' font-psemibold text-primary'>Inicia Sesion</Text></TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default SignUp