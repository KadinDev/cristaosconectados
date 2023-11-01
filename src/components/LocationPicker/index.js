import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

import data from '../../utils/StateProvince.json';

export function LocationPicker({
    onCityChange,
    onStateChange
}){
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);

    const states = data.estados;
    const cities = data.cidades;
    
    // aqui passo a cidade e o estado que o user escolher para o meu
    // signUp ter acesso a elas, uso o useEffect para os valores sempre
    // mudarem se o user escolher outra cidade ou estado
    useEffect(() => {
        onCityChange(selectedCity);
        onStateChange(selectedState);
    },[
        selectedCity, selectedState
    ]);


    function handleStatesChange(state){
        setSelectedState(state);
        // Filtrar as cidades com base no estado selecionado
        const filteredCities = cities.filter((citie) => citie.estadoId === state);

        setFilteredCities(filteredCities);

        if (filteredCities.length > 0) {
            setSelectedCity(filteredCities[0].cidade);
        }

    };

    return (
        <>
        <View style={styles.container} >
            <Picker
                selectedValue={selectedState}
                onValueChange={handleStatesChange}
            >
                <Picker.Item 
                    style={styles.pickerItem}
                    label="Selecione seu estado" 
                    value={null} 
                />

                {states.map((state) => (
                    <Picker.Item 
                        style={styles.pickerItem}
                        key={state.id} 
                        label={state.estado} 
                        value={state.id} 
                    />
                ))}
            </Picker>
        </View>
        
        { selectedState !== '' && 
            <View style={styles.containerState}>
                <Picker
                    selectedValue={selectedCity}
                    onValueChange={(cidade) => setSelectedCity(cidade)}
                >   
                    {filteredCities.map((cidade) => (
                        <Picker.Item
                            style={styles.pickerItem} 
                            key={cidade.cidade} 
                            label={cidade.cidade} 
                            value={cidade.cidade} 
                        />
                    ))}
                </Picker>
            </View>
        }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: RFValue(40),
        justifyContent: 'center',
        marginBottom: RFValue(5),
        backgroundColor: theme.COLORS.WHITE_500,

        borderRadius: RFValue(50),
        borderWidth: RFValue(1),
        borderColor: theme.COLORS.PLACEHOLDER,
    },
    containerState: {
        width: '100%',
        height: RFValue(40),
        justifyContent: 'center',
        marginBottom: RFValue(5),
        marginTop: RFValue(5),
        backgroundColor: theme.COLORS.WHITE_500,

        borderRadius: RFValue(50),
        borderWidth: RFValue(1),
        borderColor: theme.COLORS.PLACEHOLDER,
    },
    pickerItem: {
        height: RFValue(40),
        color: theme.COLORS.BLACK_700,
        fontSize: RFValue(16),
    },
})