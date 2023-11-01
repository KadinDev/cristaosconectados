import { useState } from 'react';

import {
    Input,
    InputSmall,
    InputMedium,
    InputLarge
} from './styles';

import theme from '../../theme';

export function InputComponent ({
    placeholder,
    value,
    onChangeText,
    onFocusStyle,
    secureTextEntry,
    size,
    multiline,
}){

    const [isFocused, setIsFocused] = useState(false);

    function handleFocus(){
        setIsFocused(true);
    };

    function handleBlur(){
        setIsFocused(false);
    };

    let InputStyle;
    if (size === 'small') {
        InputStyle = InputSmall;
    } else if (size === 'medium') {
        InputStyle = InputMedium;
    } else if (size === 'large') {
        InputStyle = InputLarge;
    } else {
        InputStyle = Input; // Estilo padrão
    }

    return (
        <InputStyle
            style={[
                isFocused && onFocusStyle,
            ]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            secureTextEntry={secureTextEntry}
            multiline={multiline}

            autoCorrect={false}
            autoCapitalize='none'
            maxLength={150}

            placeholderTextColor={theme.COLORS.PLACEHOLDER}

        />
    )
}
