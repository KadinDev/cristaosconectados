import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export const Header = styled(LinearGradient).attrs({
    colors: [theme.COLORS.BLACK_700, theme.COLORS.RED],
    start: { x: RFValue(0), y: RFValue(1) },
    end: { x: RFValue(1), y: RFValue(5) },
})`
    width: 100%;
    height: ${RFValue(120)}px;
    padding-top: ${getStatusBarHeight() + RFValue(10)}px;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderBackgroundStyleNu = styled.View`
    background-color: ${theme.COLORS.STYLE_NU};
    width: 100%;
    height: ${RFValue(120)}px;
    padding-top: ${getStatusBarHeight() + RFValue(10)}px;
    padding-bottom: ${RFValue(10)}px;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;

export const Search = styled.View`
    width: 70%;
    height: ${RFValue(40)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${theme.COLORS.WHITE_700};
    border-radius: ${RFValue(10)}px;
    border: solid 1px ${theme.COLORS.BLUE};
`;

export const ViewButtonHeader = styled.View`
    background-color: ${theme.COLORS.WHITE_700};
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
    border: solid 1px ${theme.COLORS.BLUE_500};
`;

export const ViewSelected = styled.View``;

export const ButtonViewSelected = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const IconViewSelected = styled(MaterialIcons)`
    color: ${theme.COLORS.BLUE_500};
`;

export const TextViewSelected = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${theme.COLORS.BLUE_500};
    font-family: ${theme.FONTS.TITLE_MEDIUM};
`;

export const FlatListItemsModal = styled.FlatList.attrs({
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + RFValue(120),
        paddingTop: getStatusBarHeight() + RFValue(10),
    },
    showsVerticalScrollIndicator: false,
})`
    background-color: ${theme.COLORS.WHITE_500};
`;

export const ButtonFlatListSelectedItemsModal = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4,
})`
    width: 100%;
    height: ${RFValue(50)}px;
    padding: ${RFValue(5)}px ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
    margin-bottom: ${RFValue(5)}px;
    border-bottom-width: 1px;
    border-color: ${theme.COLORS.PLACEHOLDER};
    border-style: solid;
`;

export const TitleButtonFlatListSelectedItemsModal = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.FONTS.TEXT_MEDIUM};
    text-transform: uppercase;
`;

export const CloseFlatListSelectedItemsModal = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4,
})`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(30)}px;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: ${getBottomSpace() + RFValue(20)}px;
    right: ${RFValue(20)}px;
    background-color: ${theme.COLORS.STYLE_NU};
    border: solid ${RFValue(2)}px ${theme.COLORS.BLACK_500};
`;