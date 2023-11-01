import { View, ActivityIndicator, StatusBar } from 'react-native';

import {AuthProvider} from './src/contexts/auth';
import { Routes } from './src/routes';
import theme from './src/theme';

import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium, 
  Roboto_700Bold 
} from '@expo-google-fonts/roboto';

import { 
  JosefinSans_400Regular, 
  JosefinSans_500Medium, 
  JosefinSans_700Bold 
} from '@expo-google-fonts/josefin-sans';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold
  });
  

  if(!fontsLoaded){
    return (
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      >
        <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />

        <ActivityIndicator
          size={40}
          color={theme.COLORS.PLACEHOLDER}
        />
      </View>
    )
  };

  return (
    <AuthProvider>
        <Routes/>
    </AuthProvider>
  );
}

