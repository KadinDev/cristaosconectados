import {useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/signIn';
import { SignUp } from '../screens/signUp';
import { Welcome } from '../screens/welcome';

import { NewPost } from '../screens/newPost';

import { UserTabRoutes } from './app.routes';
const { Navigator, Screen, Group } = createNativeStackNavigator();

import { AuthContext } from '../contexts/auth';
import theme from '../theme';

export function AuthRoutes(){

    const { user } = useContext(AuthContext)

    return (
        <Navigator 
            screenOptions={{ 
                headerShown: false, 
                animation: 'slide_from_right' 
            }} 
        >

            { user ? (
                <Group>
                    <Screen name='userTabRoutes' component={UserTabRoutes} />

                    {/* tela que será navigation stack, uma rota fora do bottom tabs  */}
                    <Screen 
                        options={{
                            headerShown: true,
                            headerTitle: 'Compartilhar',
                            headerStyle: { backgroundColor: theme.COLORS.STYLE_NU},
                            headerTintColor: theme.COLORS.WHITE_500,
                            headerTitleAlign: 'center'
                        }} 
                        name='newpost' component={NewPost} 
                    />
                </Group>
            ) : (
                <Group>
                    <Screen name='welcome' component={Welcome} />
                    <Screen name='login' component={SignIn} />
                    <Screen name='register' component={SignUp} />
                </Group>
            ) }
        </Navigator>
    )
}