import { useContext, useEffect, useState } from 'react'
import { StatusBar, View, Text, TouchableOpacity, RefreshControl } from 'react-native';
import { getBottomSpace } from "react-native-iphone-x-helper";

import {
    Container,
    FlatListHome
} from './styles';

import { AuthContext } from '../../contexts/auth';
import { HeaderComponent } from '../../components/Header';
import { CardFlatlistHome } from '../../components/CardFlatListHome';
import { ModalWithLoad } from '../../components/ModalWithLoad';

import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';

export function Home(){
    const { signOutUser, user } = useContext(AuthContext);
    
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [load, setLoad] = useState(false);

    //console.log(filteredUsers)

    function handleFilterPosts(filterPosts){
        setFilteredPosts(filterPosts);
    };

    function handleLoadPosts(load){
        setLoad(load)
    };


    return (
        <Container>
            <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />

            <FlatListHome
                data={filteredPosts}
                ListHeaderComponent={ 
                    <HeaderComponent
                        onFilterPosts={handleFilterPosts}
                        loadPosts={handleLoadPosts} // load para enquanto os posts carregam
                    /> 
                } // Um heander na flatlist
                
                //stickyHeaderIndices={[0]} // se o header sobe ao rolar a lista ou não
                keyExtractor={item => item.postId }
                
                // ideia para criar um id unico, quando não tem id salvo no firebase
                //keyExtractor={item => `${item.owner}-${item.timesTamp.seconds}-${item.timesTamp.nanoseconds}`}

                renderItem={ ({ item }) => (
                    <CardFlatlistHome data={item}  />
                )}
                
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: getBottomSpace() + RFValue(90)
                }}

                ListEmptyComponent={
                    <View style={{ 
                        width: '80%',
                        alignSelf: 'center',
                        height: RFValue(200),
                        justifyContent: 'center', 
                        alignItems: 'center', 
                    }}>
                        <Text
                            style={{ 
                                color: theme.COLORS.PLACEHOLDER,
                                fontSize: RFValue(16),
                                lineHeight: RFValue(18),
                                fontFamily: theme.FONTS.TITLE_REGULAR,
                                textAlign: 'center'
                            }}
                        > 
                            Nada do lugar selecionado foi postado ainda. 
                        </Text>
                    </View>
                }


                // pro refresh dar certo o Flatlist precisa estar na mesma tela
                // teria que estar junto com o HeaderComponent
                // deixei separado pro codigo nao ficar enorme
                
                //refreshControl={
                //    <RefreshControl
                //        refreshing={refreshing}
                //        onRefresh={handleRefresh}
                //       
                //    />
                //}

            />

            
            <ModalWithLoad openModal={load} />

        </Container>
    )
}