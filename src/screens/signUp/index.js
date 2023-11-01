import {
  useContext, 
  useState,
} from 'react';

import {
  Container,
  ScrollContent,
  AnimatedViewImage,
  Image,
  ViewButtonBack,
  ContentForm,
  Title,
  AnimatedViewInput,
  TextWarnInput
} from './styles';

import { 
  StatusBar,
  Platform,
  TouchableOpacity
} from 'react-native';

import Animated, {
  FadeIn,
  FadeInUp,
  FadeInDown
} from 'react-native-reanimated';

import { AuthContext } from '../../contexts/auth';

import { InputComponent } from '../../components/Input';
import { ButtonGoBack } from '../../components/ButtonGoBack';
import { Button } from '../../components/Button';
import { LocationPicker } from '../../components/LocationPicker';

import theme from '../../theme';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import Toast from 'react-native-toast-message';
import { ErrorDifferentPasswords, ErrorCaracteresPasswords } from '../../utils/messages';

export function SignUp() {
  const {signUp, isLogging} = useContext(AuthContext);
  
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [ministry, setMinistry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  //const [disabledButton, setDisabledButton] = useState(true);
  const [showPassword, setShowPassword] = useState(true);


  function handleRegisterUser(){
    if(password.length < 6){
      ErrorCaracteresPasswords();
      return;
    } 
    // seguir a mesma sequencia que esta no começo de async function signUp
    signUp(
      email, 
      password,
      name,
      bio,
      ministry,
      selectedState,
      selectedCity
    );
  };

  function handleShowPassword(){
    setShowPassword(!showPassword);
  };


  // função de retorno para receber o valor de Cidade e Estado do Picker
  // mando as funções para o Picker, e acesso as funções no Picker passando para elas
  // o city e o state que o usuer selecionar
  function handleCityChange(city){
    setSelectedCity(city);
  };
  function handleStateChange(state){
    setSelectedState(state);
  };
  ///////////////////////////////////


  return (
    <Container
      // se for android, undefined. pq android já sabe lidar com isso
      behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
    >
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
      
      <ScrollContent>

        <AnimatedViewImage
          entering={FadeIn.delay(RFValue(200)).duration(RFValue(600)).springify()}
        >
          <Image source={require('../../assets/logo.png')}/>

          <ViewButtonBack>
            <ButtonGoBack />
          </ViewButtonBack>
        </AnimatedViewImage>

        <ContentForm>

          <Title
            entering={FadeInDown.delay(RFValue(200)).duration(RFValue(600)).springify()}
          >criar conta</Title>
          
          <AnimatedViewInput
            entering={FadeInDown.delay(RFValue(200)).duration(RFValue(600)).springify()}
          >
            <InputComponent
              size='large'
              value={name} 
              onChangeText={setName} 
              placeholder='Nome' 
              onFocusStyle={{ borderColor: theme.COLORS.BLACK_700 }}
            />
          </AnimatedViewInput>

          <AnimatedViewInput
            entering={FadeInDown.delay(RFValue(230)).duration(RFValue(600)).springify()}
          >
            <InputComponent
              size='large'
              value={bio} 
              onChangeText={setBio} 
              placeholder='Bio' 
              onFocusStyle={{ borderColor: theme.COLORS.BLACK_700 }}
              multiline

              style={{
                backgroundColor: 'red'
              }}
            />
            <TextWarnInput> máximo {bio.length < 1 ? 150 : 150 - bio.length } caracteres </TextWarnInput>
          </AnimatedViewInput>

          <AnimatedViewInput
            entering={FadeInDown.delay(RFValue(260)).duration(RFValue(600)).springify()}
          >
            <InputComponent
              size='large'
              value={ministry} 
              onChangeText={setMinistry} 
              placeholder='Igreja' 
              onFocusStyle={{ borderColor: theme.COLORS.BLACK_700 }}

              style={{
                backgroundColor: 'red'
              }}
            />
          </AnimatedViewInput>

          <AnimatedViewInput
            entering={FadeInDown.delay(RFValue(290)).duration(RFValue(600)).springify()}
          >

           <LocationPicker
              onCityChange={handleCityChange}
              onStateChange={handleStateChange}
           />
          
          </AnimatedViewInput>

          <AnimatedViewInput
            entering={FadeInDown.delay(RFValue(320)).duration(RFValue(600)).springify()}
          >
            <InputComponent
              size='large'
              value={email} 
              onChangeText={setEmail} 
              placeholder='Email' 
              onFocusStyle={{ borderColor: theme.COLORS.BLACK_700 }}
            />
          </AnimatedViewInput>

          <AnimatedViewInput
            entering={FadeInDown.delay(RFValue(380)).duration(RFValue(600)).springify()}
          >
            <InputComponent
              size='large'
              value={password} 
              onChangeText={setPassword} 
              placeholder='Senha' 
              secureTextEntry={showPassword}
              onFocusStyle={{ borderColor: theme.COLORS.BLACK_700 }}
            />
      
            <TouchableOpacity
              onPress={handleShowPassword}
              activeOpacity={0.5}
              style={{
                position: 'absolute', right: RFValue(0), alignItems: 'center', 
                height: '100%', justifyContent: 'center', width: RFValue(40)
               }}
            >
              <MaterialIcons
                name={ showPassword ? 'visibility' : 'visibility-off' }
                size={RFValue(20)}
                color={theme.COLORS.BLACK_700}
              />
            </TouchableOpacity>

          </AnimatedViewInput>

          <TextWarnInput style={{marginTop: RFValue(-10)}} > mínimo 6 caracteres </TextWarnInput>
          
          <AnimatedViewInput
            entering={FadeInDown.delay(RFValue(450)).duration(RFValue(600)).springify()}
            style={{marginTop: RFValue(10)}}
          >
            <Button 
              title='cadastrar' 
              load={isLogging}
              //disabled={disabledButton}
              onPress={handleRegisterUser}
            />
          </AnimatedViewInput>

        </ContentForm>

      </ScrollContent>
              
      <Toast/>
      
    </Container>
  );
}
