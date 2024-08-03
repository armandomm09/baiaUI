import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const StatsGraph = () => {

  return (
    <View>
      <Image source={images.statsViewBG} className='h-[70%]' resizeMode='contain' />
    </View>

  );
}

export default StatsGraph