import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';

export function ButtonGoBack({color = true}){
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}
            style={{padding: 10}}
        >
            <MaterialIcons
                name='arrow-back-ios'
                color={color ? theme.COLORS.WHITE_500 : theme.COLORS.BLACK_700}
                size={RFValue(20)}
            />
        </TouchableOpacity>
    )
}