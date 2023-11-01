import {useContext} from 'react'
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export function Favorites(){
    //const { signOut } = useContext(AuthContext);

    return (
        <View>
            <Text> Meus Favoritos </Text>
            <Button title='Sair' onPress={alert('Sair')} />
        </View>
    )
}