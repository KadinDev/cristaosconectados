import { StatusBar, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import {
    Container,
    CircleTop,
    CircleBottom,
    Title,
    SubTitle,
    Links,
    ButtonTextLogin,
    ButtonTextRegister,
    WelcomeText
} from './styles';

import Animated, {
    FadeInLeft,
    FadeInRight,
    FadeInDown,
    FadeIn
} from 'react-native-reanimated';

import { useNavigation } from '@react-navigation/native';

export function Welcome(){
    const navigation = useNavigation();

    return (
        <Container>
            <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />

            <CircleTop 
                entering={FadeInRight.delay(RFValue(600)).duration(RFValue(1000)).springify().damping(3)}
            />

            <CircleBottom 
                entering={FadeInLeft.delay(RFValue(600)).duration(RFValue(1000)).springify().damping(3) }
            />

            <Title entering={FadeInLeft.delay(RFValue(600)).duration(RFValue(1000)).springify()}> 
                Cristãos 
            </Title>

            <SubTitle entering={FadeInRight.delay(RFValue(800)).duration(RFValue(1500)).springify()}> 
                conectados 
            </SubTitle>

            <Links>
                <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('login')} 
                >
                    <ButtonTextLogin
                        entering={FadeInDown.delay(RFValue(400)).duration(RFValue(1000)).springify()}
                    > login </ButtonTextLogin>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('register')}
                >
                    <ButtonTextRegister
                        entering={FadeInDown.delay(RFValue(600)).duration(RFValue(1000)).springify()}
                    > cadastre-se </ButtonTextRegister>
                </TouchableOpacity>

                <WelcomeText 
                    entering={FadeIn.delay(RFValue(800)).duration(RFValue(1000)).springify()}
                > seja bem vindo </WelcomeText>
            </Links>

        </Container>
    )
}