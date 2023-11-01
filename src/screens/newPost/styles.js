import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    padding: 0 ${RFValue(20)}px;
    background-color: ${theme.COLORS.WHITE_500};
`;


export const InputShare = styled.TextInput.attrs({
    placeholderTextColor: theme.COLORS.PLACEHOLDER
})`
    text-align: left;
    width: 100%;
    height: ${RFValue(300)}px;
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(18)}px;
    color: ${theme.COLORS.BLACK_500};
    font-family: ${theme.FONTS.TEXT_REGULAR};
    border: solid 2px ${theme.COLORS.BLUE_500};
    margin: ${RFValue(20)}px 0 ${RFValue(10)}px;
    background-color: ${theme.COLORS.WHITE_700};
`;
