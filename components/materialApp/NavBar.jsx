import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/GlobalProvider';
import { getAvatarUrl, signOut } from '../../lib/appWrite';
import { Appbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const NavBar = ({onPressIcon}) => {

    const [avatarUri, setAvatarUri] = useState(null);
    const { user } = useGlobalContext()
    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const uri = await getAvatarUrl(user.serviceName);
                setAvatarUri(uri);
            } catch (error) {
                console.error('Error fetching avatar URL:', error);
            }
        };

        fetchAvatar();
    }, []);
    
    return (
        
        <Appbar.Header className="bg-transparent">
            <View className="px-2 flex-row justify-between w-full items-center">
                <View>
                    <Text className="text-sm" style={{ lineHeight: 18 }}>Hola,</Text>
                    <Text className="text-lg font-semibold" style={{ lineHeight: 18 }}>{!user ? '' : user.serviceName}</Text>
                </View>
                <TouchableOpacity onPress={onPressIcon}>
                    <Image
                        className="h-10 w-10 rounded-full"
                        resizeMode="contain"
                        source={avatarUri ? { uri: avatarUri } : null}
                    />
                </TouchableOpacity>
            </View>
        </Appbar.Header>
    )
}

export default NavBar