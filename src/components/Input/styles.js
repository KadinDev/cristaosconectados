import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import theme from "../../theme";

export const Input = styled.TextInput`
    height: ${RFValue(40)}px;
    padding: 0 ${RFValue(10)}px;
    padding-left: ${RFValue(15)}px;
    border: solid 1px ${theme.COLORS.PLACEHOLDER};
    font-size: ${RFValue(16)}px;
    font-family: ${theme.FONTS.TEXT_REGULAR};
`;

export const InputSmall = styled(Input)`
    width: 20%;
    border-radius: ${RFValue(5)}px;
`;

export const InputMedium = styled(Input)`
    width: 50%;
    border-radius: ${RFValue(20)}px;
`;

export const InputLarge = styled(Input)`
    width: 100%;
    border-radius: ${RFValue(20)}px;
`;

