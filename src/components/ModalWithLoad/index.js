import {
    Modal,
    View,
    ActivityIndicator,
} from 'react-native';

import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

export function ModalWithLoad({openModal}){
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={openModal}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ActivityIndicator 
                    size={RFValue(50)} 
                    color={theme.COLORS.BLUE_500} 
                />
            </View>
        </Modal>
    )
}