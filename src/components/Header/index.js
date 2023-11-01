import { useState, useContext, useEffect } from 'react';

import { 
    TouchableOpacity, 
    Modal,
} from 'react-native';

import {
    HeaderBackgroundStyleNu,
    Search,
    ViewButtonHeader,
    ViewSelected,
    ButtonViewSelected,
    IconViewSelected,
    TextViewSelected,
    FlatListItemsModal,
    ButtonFlatListSelectedItemsModal,
    TitleButtonFlatListSelectedItemsModal,
    CloseFlatListSelectedItemsModal
} from './styles';

import theme from '../../theme';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { AuthContext } from '../../contexts/auth';
import data from '../../utils/StateProvinceForHeader.json';
import {
    handleLoadPosts,
    handleLoadPostsByStateAndCity,
    handleLoadPostsByState,
    handleLoadPostsByCity,
    handleLoadPostsByDifferentStateAndCity
} from '../../utils/functionsFilteresHeader';

import Animated, {
    FadeInDown,
} from 'react-native-reanimated';

import { useNavigation } from '@react-navigation/native';

export function HeaderComponent({ onFilterPosts, loadPosts }){

    const { user } = useContext(AuthContext);
    const navigation = useNavigation();

    // tem que ver se ao atualizar estado e cidade do usuario vai interferir aqui
    const stateUser = user?.selectedState;
    const cityUser = user?.selectedCity;

    const [state, setState] = useState(stateUser);
    const [city, setCity] = useState(cityUser);

    const [selectedStateOptions, setSelectedStateOptions] = useState(data.estados);
    const [selectedCityOptions, setSelectedCityOptions] = useState(
        data.cidades.filter((item) => item.estadoId === state || item.estadoId === 'ALL')
    );

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalCity, setModalCity] = useState(false);

    const [load, setLoad] = useState(false);

    // porem dessa forma esta pegando somente do usuario logado
    /*
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleFilteredPostsSearch();
        });
        return unsubscribe;
        
    },[navigation])
    */
    

    useEffect(() => {
        handleFilteredPostsSearch()
    },[])


    //
    function toggleModalState() {
        setModalVisible(!isModalVisible);
    }
    function toggleModalCity() {
        setModalCity(!isModalCity);
    };

    // Função para lidar com a seleção de um estado no primeiro modal
    function handleStateSelection(selected) {
        setState(selected);
        setSelectedCityOptions(
            data.cidades.filter((item) => item.estadoId === selected || item.estadoId === 'ALL')
        );
        toggleModalState(); // Feche o modal após a seleção
    };

    // Função para lidar com a seleção de uma cidade no segundo modal
    function handleCitySelection(selected) {
        setCity(selected);
        toggleModalCity(); // Feche o modal após a seleção
    };

    async function handleFilteredPostsSearch() {
        setLoad(true);
        loadPosts(true);

        let filteredPosts = [];

        if (state === 'ALL' && city === 'Todos') {
            // Mostrar todos os usuários
            filteredPosts = await handleLoadPosts();
        } 
        else if (state === 'ALL' && city !== 'Todos') {
            // Mostrar usuários de qualquer estado, mesma cidade
            filteredPosts = await handleLoadPostsByCity(city);
        }
        else if (state === user.selectedState && city === user.selectedCity) {
            // Mostrar usuários do mesmo estado e cidade do usuário logado
            filteredPosts = await handleLoadPostsByStateAndCity(state, city);
        }
        else if (state !== 'Todos' && city === 'Todos') {
            // Mostrar usuários do mesmo estado, qualquer cidade
            filteredPosts = await handleLoadPostsByState(state);
        } 
        else if (state === 'Todos' && city !== 'Todos') {
            // Mostrar usuários de qualquer estado, mesma cidade
            filteredPosts = await handleLoadPostsByCity(city);
        }
        else if (state !== 'Todos' && city !== 'Todos') {
            filteredPosts = await handleLoadPostsByDifferentStateAndCity(state, city);
        }

        onFilterPosts(filteredPosts);
        setLoad(false);
        loadPosts(false);
    };

    return (
      <HeaderBackgroundStyleNu>

        <ViewButtonHeader>
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => navigation.navigate('newpost') }
            >
                <MaterialIcons 
                    name='post-add' 
                    size={RFValue(25)} 
                    color={theme.COLORS.BLUE_500} 
                />
            </TouchableOpacity>
        </ViewButtonHeader>

        <Search>
            <ViewSelected 
                style={{
                    width: RFValue(50), 
                }} 
            >
                <ButtonViewSelected
                    onPress={toggleModalState}
                >
                    <IconViewSelected 
                        size={RFValue(20)} 
                        name='arrow-drop-down'
                    />
                    <TextViewSelected> { state } </TextViewSelected>
                </ButtonViewSelected>

            </ViewSelected>

            <ViewSelected
                style={{
                    width: RFValue(120), 
                }}
            >
                <ButtonViewSelected
                    onPress={toggleModalCity}
                >
                    <IconViewSelected 
                        size={RFValue(20)} 
                        name='arrow-drop-down'
                    />
                    
                    <TextViewSelected 
                        numberOfLines={1} 
                        style={{ marginLeft: RFValue(4) }}
                    >
                        {city}
                    </TextViewSelected>
                </ButtonViewSelected>
                
            </ViewSelected>
        </Search>

        <ViewButtonHeader>
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={handleFilteredPostsSearch}
                disabled={load}
            >
                <MaterialIcons 
                    name='search' 
                    size={RFValue(25)} 
                    color={theme.COLORS.BLUE_500} 
                />
            </TouchableOpacity>

        </ViewButtonHeader>


        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
        >
            <FlatListItemsModal
                data={selectedStateOptions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ButtonFlatListSelectedItemsModal onPress={() => handleStateSelection(item.id)}>
                        <TitleButtonFlatListSelectedItemsModal>
                            {item.estado}
                        </TitleButtonFlatListSelectedItemsModal>
                    </ButtonFlatListSelectedItemsModal>
                )}
            />
    
            <Animated.View entering={FadeInDown.delay(RFValue(600)).duration(RFValue(600)).springify()}>
                <CloseFlatListSelectedItemsModal 
                    onPress={toggleModalState} 
                >
                    <MaterialIcons
                        name='close'
                        size={RFValue(20)}
                        color={theme.COLORS.WHITE_500}
                    />
                </CloseFlatListSelectedItemsModal>
            </Animated.View>
        </Modal>

        
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalCity}
        >
            <FlatListItemsModal
                data={selectedCityOptions}
                keyExtractor={(item) => item.cidade}
                renderItem={({ item }) => (
                    <ButtonFlatListSelectedItemsModal onPress={() => handleCitySelection(item.cidade)}>
                        <TitleButtonFlatListSelectedItemsModal>
                            {item.cidade}
                        </TitleButtonFlatListSelectedItemsModal>
                    </ButtonFlatListSelectedItemsModal>
                )}
            />

            <Animated.View entering={FadeInDown.delay(RFValue(600)).duration(RFValue(600)).springify()}>
                <CloseFlatListSelectedItemsModal 
                    onPress={toggleModalCity}
                >
                    <MaterialIcons
                        name='close'
                        size={RFValue(20)}
                        color={theme.COLORS.WHITE_500}
                    />
                </CloseFlatListSelectedItemsModal>
            </Animated.View>
        </Modal>


      </HeaderBackgroundStyleNu>
    );
}