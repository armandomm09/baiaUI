import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import { SizedBox } from 'sizedbox'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';
import { createUser } from '../../lib/appWrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignUp = () => {
  const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    serviceName: ""
  });

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username, form.serviceName);
      setUser(result);
      setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  }
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
              handleTextChange={(e) => setForm({...form, username: e})}
            />

            <FormField
              title="Nombre de tu negocio"
              placeholder='Eg. El sabor de Tlaxcala'
              keyboardType="serviceName"
              handleTextChange={(e) => setForm({...form, serviceName: e})}
            />

            <FormField
              title="Correo"
              placeholder='Eg. baia@gmail.com'
              keyboardType="email-address"
              handleTextChange={(e) => setForm({...form, email: e})}
            />

            <FormField
              title="Password"
              placeholder='Eg. 123!@#¡™£'
              keyboardType="password"
              handleTextChange={(e) => setForm({...form, password: e})}
            />

            <FormField
              title="Confirm Password"
              placeholder='Eg. 123!@#¡™£'
              keyboardType="password"
            />
            <View className=' mt-2 items-center justify-center flex-1'>
              <CustomButton
              onPress={submit}
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