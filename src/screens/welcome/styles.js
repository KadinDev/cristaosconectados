import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { getBottomSpace } from "react-native-iphone-x-helper";

import Animated from 'react-native-reanimated';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.COLORS.WHITE_500};
`;

export const CircleTop = styled(Animated.View)`
    height: ${RFValue(200)}px;
    width: ${RFValue(200)}px;
    border-radius: ${RFValue(100)}px;
    border: solid ${RFValue(3)}px ${theme.COLORS.STYLE_NU};
    position: absolute;
    top: ${RFValue(-50)}px;
    right: ${RFValue(-50)}px;
`;

export const CircleBottom = styled(Animated.View)`
    height: ${RFValue(150)}px;
    width: ${RFValue(150)}px;
    border-radius: ${RFValue(100)}px;
    border: solid ${RFValue(3)}px ${theme.COLORS.STYLE_NU};
    position: absolute;
    bottom: ${RFValue(-50)}px;
    left: ${RFValue(-50)}px;
`;

export const Title = styled(Animated.Text)`
    font-size: ${RFValue(30)}px;
    color: ${theme.COLORS.STYLE_NU};
    text-transform: capitalize;
    font-family: ${theme.FONTS.TITLE_BOLD};
`;

export const SubTitle = styled(Animated.Text)`
    font-size: ${RFValue(30)}px;
    color: ${theme.COLORS.STYLE_NU};
    text-transform: capitalize;
    font-family: ${theme.FONTS.TITLE_BOLD};
`;

export const Links = styled.View`
    width: 50%;
    height: ${RFValue(80)}px;
    position: absolute;
    bottom: ${getBottomSpace() + RFValue(30)}px;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonTextLogin = styled(Animated.Text)`
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(18)}px;
    text-transform: uppercase;
    font-family: ${theme.FONTS.TITLE_REGULAR};
    color: ${theme.COLORS.BLUE_500};
`;

export const ButtonTextRegister = styled(Animated.Text)`
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(18)}px;
    text-transform: uppercase;
    font-family: ${theme.FONTS.TITLE_REGULAR};
    color: ${theme.COLORS.BLUE_500};
`;

export const WelcomeText = styled(Animated.Text)`
    font-size: ${RFValue(14)}px;
    text-transform: lowercase;
    font-family: ${theme.FONTS.TITLE_REGULAR};
    color: ${theme.COLORS.BLUE_500};
`;

