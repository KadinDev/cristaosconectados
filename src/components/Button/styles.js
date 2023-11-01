import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    width: 100%;
    height: ${RFValue(40)}px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.COLORS.BLUE_500};
    border-radius: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    color: ${theme.COLORS.WHITE_500};
    font-size: ${RFValue(16)}px;
    font-family: ${theme.FONTS.TITLE_MEDIUM};
    text-transform: uppercase;
`;