import {useContext} from 'react'
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';

// Aqui irá carregar todos os posts das minhas conexões apenas

export function Friends(){
    const { signOutUser, user } = useContext(AuthContext);

    return (
        <View>
            <Text> Minhas Conexões </Text>
            <Button title='Sair' onPress={signOutUser} />
        </View>
    )
}