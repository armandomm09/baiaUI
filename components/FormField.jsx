import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { icons } from '../constants';

const AppTextField = ({ title, placeholder, isPassword = false, handleTextChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View>
            <Text className='font-medium'>{title}</Text>
            <View className="py-2.5 space-y-2 px-2 flex-1 items-center justify-center">
                <View className='relative flex-row border border-black border-opacity-75 w-full px-2.5 h-10 bg-transparent rounded-md'>
                    <TextInput
                        onChangeText={handleTextChange}
                        secureTextEntry={title === 'Password' && !showPassword}
                        className="h-10 rounded-md px-2.5 pb-2 font-bold text-sm w-full text-secondary"
                        placeholder={placeholder}
                        placeholderTextColor="rgba(0,0,0,0.35)"
                    />
                    {title === 'Password' ? (
                        <TouchableOpacity
                            className='absolute right-3 h-full justify-center'
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Image
                                className='h-7 w-6'
                                resizeMode='contain'
                                source={!showPassword ? icons.eye : icons.eyeHide}
                            />
                        </TouchableOpacity>
                    ) :  (<></>)}
                </View>
            </View>
        </View>
    );
};

export default AppTextField;
