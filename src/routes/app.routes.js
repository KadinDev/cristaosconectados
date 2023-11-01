import { useContext } from 'react';
import {View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { MaterialIcons } from '@expo/vector-icons';

import { Home } from '../screens/home';
import { Friends } from '../screens/friends';
import { Profile } from '../screens/profile';
import theme from '../theme';

import { AuthContext } from '../contexts/auth';

const { Navigator, Screen } = createBottomTabNavigator()

export function UserTabRoutes(){
    const {user} = useContext(AuthContext);

    return (
        <Navigator
            initialRouteName='home'

            screenOptions={{
                tabBarHideOnKeyboard: true, // tab bar fica atras do teclado ao abrir
                tabBarActiveTintColor: theme.COLORS.WHITE_700,

                tabBarInactiveTintColor: theme.COLORS.PLACEHOLDER,
                tabBarLabelPosition: 'beside-icon',
                headerShown: false,
                tabBarShowLabel: false, // o nome da pag ao lado do icone

                tabBarStyle: {
                    height: RFValue(50),
                    marginBottom: getBottomSpace() + RFValue(10),
                    marginHorizontal: RFValue(60),
                    paddingVertical: Platform.OS === 'ios' ? RFValue(20) : 0,
                    borderRadius: RFValue(50),
                    backgroundColor: theme.COLORS.WHITE_700,
                    elevation: RFValue(0),
                    position: 'absolute',

                    borderWidth: RFValue(0),
                    borderTopWidth: RFValue(0),
                    borderLeftWidth: RFValue(5),
                    borderRightWidth: RFValue(5),
                    borderColor: theme.COLORS.STYLE_NU,
                    elevation: RFValue(50)
                }
            }}
        >

            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({size, color, focused}) => (
                        <View
                            style={{
                                backgroundColor: focused ? theme.COLORS.STYLE_NU : 'transparent', 
                                width: RFValue(40), 
                                height: RFValue(40), 
                                alignItems: 'center',
                                justifyContent: 'center', borderRadius: RFValue(20) 
                            }}
                        >
                            <MaterialIcons name='home' size={RFValue(25)} color={color} />
                        </View>
                    )
                }}
            />

            <Screen
                name='friends'
                component={Friends}
                options={{
                    tabBarIcon: ({size, color, focused}) => (
                        <View
                            style={{
                                backgroundColor: focused ? theme.COLORS.STYLE_NU : 'transparent', 
                                width: RFValue(40), 
                                height: RFValue(40), 
                                alignItems: 'center',
                                justifyContent: 'center', borderRadius: RFValue(20) 
                            }}
                        >
                            <MaterialIcons name='group' size={RFValue(25)} color={color} />
                        </View>
                    )
                }}
            />

            <Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({size, color, focused}) => (
                        <View
                            style={{
                                backgroundColor: focused ? theme.COLORS.STYLE_NU : 'transparent', 
                                width: RFValue(40), 
                                height: RFValue(40), 
                                alignItems: 'center',
                                justifyContent: 'center', borderRadius: RFValue(20) 
                            }}
                        >
                            <Image 
                                style={{
                                    width: RFValue(25), 
                                    height: RFValue(25), 
                                    borderRadius: RFValue(100), 
                                    resizeMode: 'cover', 
                                    borderWidth: RFValue(2), 
                                    borderColor: theme.COLORS.BLACK_700 
                                }}
                                source={{uri: 
                                    user?.avatar ? 
                                    user.avatar : 
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShlxYZpp-A-b19VGpaFkNSdD4vG0UcGPCbYw&usqp=CAU' 
                                }} 
                            />
                        </View>
                        
                    )
                }}
            />
        </Navigator>
    )
}