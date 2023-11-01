import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
    flex: 1;
`;

export const FlatListHome = styled.FlatList`
    background-color: ${theme.COLORS.WHITE_500};
    width: 100%;
`;