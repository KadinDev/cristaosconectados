import {useContext, useState} from 'react';

import {
  Container,
  ScrollContent,
  AnimatedViewImage,
  Image,
  ViewButtonBack,
  ContentForm,
  Title,
  AnimatedViewInput,
  RecoverPassword,
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
import theme from '../../theme';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import Toast from 'react-native-toast-message';

export function SignIn() {

  const {signIn, isLogging, forgotPassword} = useContext(AuthContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [disabledButton, setDisabledButton] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [recoverPassword, setRecoverPassword] = useState(false);

  /*
  useEffect(() => {
    if(email.length && password.length > 0){
      setDisabledButton(false);
    } else { 
      setDisabledButton(true); 
    }
  },[email, password]);
  */

  function handleLogin(){
    if(recoverPassword === true){
      forgotPassword(email);
      return;
    }
    signIn(email, password);
  };

  function handleShowPassword(){
    setShowPassword(!showPassword);
  };

  function handleToastRecoverPassword(){
    setRecoverPassword(!recoverPassword);
  };

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
            entering={FadeInDown.delay(RFValue(200)).duration(RFValue(1000)).springify()}
          >
            { recoverPassword ? 'recuperação de senha' : 'Login' } 
          </Title>
          
          <AnimatedViewInput
            entering={FadeInDown.delay(RFValue(200)).duration(RFValue(600)).springify()}
          >
            <InputComponent
              size='large'
              value={email} 
              onChangeText={setEmail} 
              placeholder='Email' 
              onFocusStyle={{ borderColor: theme.COLORS.BLACK_700 }}
            />
          </AnimatedViewInput>

          { !recoverPassword  &&
            <AnimatedViewInput
              entering={FadeInDown.delay(RFValue(300)).duration(RFValue(600)).springify()}
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
          }
          
          <AnimatedViewInput
            entering={FadeInDown.delay(RFValue(400)).duration(RFValue(600)).springify()}
          >
            <Button 
              title={ recoverPassword ? 'enviar' : 'entrar' } 
              load={isLogging}
              //disabled={disabledButton}
              onPress={handleLogin}
            />
          </AnimatedViewInput>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleToastRecoverPassword}
          >
            <RecoverPassword
              entering={FadeIn.delay(RFValue(500)).duration(RFValue(600)).springify()}
            >
              {recoverPassword ? 'fazer login' : 'esqueci minha senha'}
            </RecoverPassword>
          </TouchableOpacity>


        </ContentForm>

      </ScrollContent>
              
      <Toast/>
      
    </Container>
  );
}
