import { View, Text, Image, Dimensions, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { getAvatarUrl } from '../../lib/appWrite';
import { useGlobalContext } from '../../context/GlobalProvider';
import OrderClip from '../../components/SellsInfo/OrderClip';
import { info } from '../../constants';
import Carousel from 'react-native-reanimated-carousel'
import { LinearGradient } from 'expo-linear-gradient'
import StatsGraph from '../../components/SellsInfo/StatsGraph';
import { SizedBox } from 'sizedbox';

const Home = () => {
  const width = Dimensions.get('window').width;
  const renderItem = ({ item }) => {
    return (
      <OrderClip
        order={item}
      />
    );
  };
  return (
    <>

      <SafeAreaView className='h-full'>
      <SizedBox vertical={8} />
        <View className='items-center justify-center'>
          <View className='h-[200px] '>

            <Carousel className='items-center'
              loop
              width={width}
              height={200}
              autoPlay={true}
              data={info.ordersList}
              scrollAnimationDuration={1000}
              renderItem={renderItem}
              // defaultScrollOffsetValue={1}
              mode='parallax'
            />


          </View>
          <SizedBox vertical={10} />

          <View className='flex-row justify-between w-full px-4'>
            <Text className='font-pmedium'>Ventas</Text>
            <TouchableOpacity
            activeOpacity={0.6}
            >
              <Text className='font-pregular text-blue-500 underline'>Ver detalle</Text>
            </TouchableOpacity>
          </View>
          <StatsGraph/>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
