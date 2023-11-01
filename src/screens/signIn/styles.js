import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { getBottomSpace } from "react-native-iphone-x-helper";
import Animated from 'react-native-reanimated';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: ${theme.COLORS.WHITE_500};
`;

export const ScrollContent = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + RFValue(30),
    }
})` 
    width: 100%;
`

export const AnimatedViewImage = styled(Animated.View)`
    position: relative;
    height: ${RFValue(230)}px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 100%;
    height: 100%;
`;

export const ViewButtonBack = styled.View`
    position: absolute;
    top: ${RFValue(30)}px;
    left: ${RFValue(20)}px;
`;

export const ContentForm = styled.View`
    width: 100%;
    height: ${RFValue(250)}px;
    padding: ${RFValue(20)}px;
    justify-content: center;

`;

export const Title = styled(Animated.Text)`
    color: ${theme.COLORS.BLUE_500};
    font-size: ${RFValue(20)}px;
    text-align: center;
    text-transform: uppercase;
    font-family: ${theme.FONTS.TITLE_BOLD};
    margin-bottom: ${RFValue(10)}px;
    margin-top: ${RFValue(10)}px;
`;

export const AnimatedViewInput = styled(Animated.View)`
    margin-bottom: ${RFValue(10)}px;
    position: relative;
`;

export const RecoverPassword = styled(Animated.Text)`
    font-size: ${RFValue(14)}px;
    text-transform: lowercase;
    font-family: ${theme.FONTS.TITLE_REGULAR};
    color: ${theme.COLORS.BLUE_500};
    text-align: center;
`;

