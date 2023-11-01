import { ActivityIndicator } from 'react-native';

import {
    Container,
    Title
} from './styles';
import theme from '../../theme';

export function Button({
    title,
    onPress,
    disabled = false,
    load
}) {
    return (
      <Container 
        onPress={onPress} 
        disabled={disabled}
        style={{ opacity: disabled ? 0.5 : 1 }}
      >
        { load ? 
            <ActivityIndicator size={20} color={theme.COLORS.WHITE_500} /> 
            : 
            <Title> {title} </Title> 
        }
      </Container>
    );
}