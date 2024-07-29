import { View, Text, Image, Dimensions, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { getAvatarUrl } from '../../lib/appWrite';
import { useGlobalContext } from '../../context/GlobalProvider';
import OrderClip from '../../components/SellsInfo/OrderClip';
import { info } from '../../constants';
import Carousel from 'react-native-reanimated-carousel'
import { LinearGradient } from 'expo-linear-gradient'

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
        <View className='flex-1 items-center justify-center'>

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
        </SafeAreaView>
    </>
  );
};

export default Home;
