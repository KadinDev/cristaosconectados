import {useContext, useState } from 'react'
import {
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import {
    Container,
    InputShare
} from './styles';

import { AuthContext } from '../../contexts/auth';

import { Button } from '../../components/Button';
import { ModalWithLoad } from '../../components/ModalWithLoad';
import { useNavigation } from '@react-navigation/native';

import {
    collection, 
    getFirestore, 
    addDoc, 
    serverTimestamp,
    updateDoc
} from 'firebase/firestore';

export function NewPost(){
    const { user } = useContext(AuthContext);
    const navigation = useNavigation();

    const [loadNewPost, setLoadNewPost] = useState(false);
    const [shareText, setShareText] = useState('');

    async function handleCreateNewPost(){
        setLoadNewPost(true);

        try {
            const firestore = getFirestore();
            const postsColectionRef = collection(firestore, 'posts');

            // acrescentar id para o post
            const newPost = {
                avatar: user.avatar,
                name: user.name,
                ministry: user.ministry,
                text: shareText,
                owner: user.id,
                timesTamp: serverTimestamp(),
                likes: 0,
                comments: 0,
                selectedState: user.selectedState,
                selectedCity: user.selectedCity,
            };

            const docRef = await addDoc(postsColectionRef, newPost);
            
            const postId = docRef.id; // get id post

            // atualiza o mesmo post enviando mais um campo chamado postId,
            // que irá passar o id do post para eu ter acesso ao id de cada post na tela Home
            await updateDoc(docRef, { postId });
            
            setShareText('');
            setLoadNewPost(false);

            
            // fazer navegação para página do post de acordo com o id do post
            // navigation.navigate('showpost', postRef.id);
            navigation.goBack();
            
        } catch (error) {
            setLoadNewPost(false);
            console.log(error)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
        <Container>

            <InputShare
                style={{textAlignVertical: 'top'}}
                value={shareText}
                onChangeText={setShareText}
                multiline
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Escreva aqui...'
            />
            

            <Button 
                title='enviar' 
                onPress={handleCreateNewPost}
                disabled={ shareText.length < 5 ? true : false }
            />

            <ModalWithLoad openModal={loadNewPost} />
        </Container>
        </TouchableWithoutFeedback>
    )
}