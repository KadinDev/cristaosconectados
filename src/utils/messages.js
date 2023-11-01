
import Toast from 'react-native-toast-message';

export const SuccessRegister = () => {
    Toast.show({
      type: 'success',
      text1: 'Cadastro Realizado! ❤️',
      text2: 'seja bem vindo(a) ao cristãos conectados.',
    });
}

export const SuccessSendEmail = () => {
    Toast.show({
      type: 'success',
      text1: 'Email enviado, aguarde alguns instantes!',
      text2: 'enviamos um email, caso não encontre verifique seu lixo eletrônico.',
    });
}

export const ErrorEmailPasswordEmpty = () => {
    Toast.show({
      type: 'error',
      text1: 'Campos vazios!',
      text2: 'confira se preencheu todos os campos.',
    });
}

export const ErrorEmailRecoverPasswordEmpty = () => {
    Toast.show({
      type: 'error',
      text1: 'Email!',
      text2: 'informe seu email.',
    });
}

export const ErrorUserNotFound = () => {
    Toast.show({
        type: 'error',
        text1: 'Usuário não encontrado!',
        text2: 'verifique se o email e senha estão corretos.'
    });
}

export const ErrorEmailNotFound = () => {
    Toast.show({
        type: 'error',
        text1: 'Email não encontrado!',
        text2: 'verifique se seu e-mail está correto.'
    });
}

export const ErrorEmailAlreadyRegistered = () => {
    Toast.show({
        type: 'error',
        text1: 'Email já cadastrado!',
        text2: 'este email já está sendo usado.'
    });
}

export const ErrorDifferentPasswords = () => {
    Toast.show({
        type: 'error',
        text1: 'Senhas não conferem!',
        text2: 'confirme sua senha.'
    });
} 

export const ErrorCaracteresPasswords = () => {
    Toast.show({
        type: 'error',
        text1: 'Caracteres!',
        text2: 'senha no mínimo 6 caracteres.'
    });
} 
