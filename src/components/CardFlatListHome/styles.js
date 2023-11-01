import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(300)}px;
    padding: ${RFValue(15)}px;
    margin-bottom: ${RFValue(20)}px;
    background-color: ${theme.COLORS.WHITE_700};
`;

export const ContainerCard = styled.View`
    width: 100%;
    height: 100%;
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(20)}px;
    background-color: ${theme.COLORS.WHITE_500};
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(48)}px;
    flex-direction: row;
    align-items: flex-start;
    border-bottom-width: ${RFValue(1)}px;
    border-color: ${theme.COLORS.PLACEHOLDER};
`;

export const Avatar = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
    border-radius: ${RFValue(30)}px;
`;

export const ViewName = styled.View`
    flex: 1;
    height: ${RFValue(45)}px;
    flex-direction: column;
    padding-left: ${RFValue(5)}px;
    align-items: flex-start;
    justify-content: center;
`;

export const Name = styled.Text`
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(17)}px;
    text-transform: capitalize;
    font-family: ${theme.FONTS.TEXT_MEDIUM};
    color: ${theme.COLORS.BLUE_500};
`;

export const Ministry = styled.Text`
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(14)}px;
    text-transform: capitalize;
    font-family: ${theme.FONTS.TEXT_REGULAR};
    color: ${theme.COLORS.BLACK_500};
    opacity: 0.7;
`;

export const ButtonViewSelected = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const IconViewSelected = styled(MaterialIcons)`
    color: ${theme.COLORS.BLACK_700};
`;

export const TextViewSelected = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${theme.COLORS.BLACK_700};
    font-family: ${theme.FONTS.TITLE_MEDIUM};
`;

export const ContainerPost = styled.View`
    flex: 1;
    padding-top: ${RFValue(5)}px;
`;

export const Post = styled.View`
    flex: 1;
    flex-direction: row;
    width: 100%;
    border-bottom-width: ${RFValue(1)}px;
    border-color: ${theme.COLORS.PLACEHOLDER};
    border-style: solid;
    position: relative;
`;

export const Content = styled.Text`
    flex: 1;
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(17)}px;
    text-align: left;
    margin-bottom: ${RFValue(25)}px;
    color: ${theme.COLORS.BLACK_500};
    font-family: ${theme.FONTS.TEXT_MEDIUM};
`;

export const ButtonMore = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    position: absolute;
    bottom: ${RFValue(0)}px;
    right: ${RFValue(0)}px;
    height:  ${RFValue(25)}px;
    justify-content: center;
`;

export const More = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.FONTS.TITLE_REGULAR};
`;

export const Buttons = styled.View`
    width: ${RFValue(200)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: ${RFValue(30)}px;
    align-self: center;
`;

export const ButtonLikeAndComment = styled.TouchableOpacity`
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;

export const TextLikeAndComment = styled.Text`
    color: ${theme.COLORS.BLACK_500};
    font-size: ${RFValue(14)}px;
    font-family: ${theme.FONTS.TITLE_REGULAR};
    margin-left: ${RFValue(5)}px;
`;