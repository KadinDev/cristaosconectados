import {useContext} from 'react'
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export function Profile(){
    const { signOutUser, user } = useContext(AuthContext);

    return (
        <View style={{ marginTop: 200 }} >
            <Text> {user.name} </Text>
            <Button title='Sair' onPress={signOutUser} />
        </View>
    )
}