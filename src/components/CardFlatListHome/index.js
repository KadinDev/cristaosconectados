import { 
    useContext, 
    useState, 
    useEffect,
    useRef
} from 'react';

import { 
    View, 
    TouchableWithoutFeedback, 
    TouchableOpacity 
} from 'react-native';

import {
    Container,
    ContainerCard,
    Header,
    Avatar,
    ViewName,
    Name,
    Ministry,
    ContainerPost,
    Post,
    Content,
    ButtonMore,
    More,
    Buttons,
    ButtonLikeAndComment,
    TextLikeAndComment
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { formater } from '../../utils/formattedNumbers';

import { AuthContext } from '../../contexts/auth';

import {
    collection, 
    getFirestore, 
    setDoc,
    doc, 
    updateDoc,
    deleteDoc,
    getDoc,
} from 'firebase/firestore';

import { BounceIn } from 'react-native-reanimated';

export function CardFlatlistHome({data}){
    const { user } = useContext(AuthContext);

    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(data.likes);
    
    const animationHeart = useRef(null); 

    const contentPostText = data.text;
    let displayedText = contentPostText;

    if(contentPostText.length > 270){
        displayedText = contentPostText.slice(0, 270) + "..."
    }


    useEffect(() => {
        
        const firestore = getFirestore();
        const docId = `${user.id}_${data.postId}`;
        const userLikesCollection = collection(firestore, 'userPostsLikes');

        // acessando o doc com o id do user + id do post 
        const userLikeDocRef = doc(userLikesCollection, docId);

        async function checkUserLikedPost(){
            const userLikeDocSnapshot = await getDoc(userLikeDocRef);
            
            if(userLikeDocSnapshot.exists()) {
                setIsLiked(true);
            }
            else {
                setIsLiked(false);
            }
        };

        checkUserLikedPost();

    },[user.id, data.postId]);

    async function handleUserLikePost(id, user){
        try {
            const firestore = getFirestore();
            const userLikesCollection = collection(firestore, 'userPostsLikes');
            const docId = `${user.id}_${id}`;

            // verifica se o usuário já curtiu o post
            const userLikeDocRef = doc(userLikesCollection, docId);
            const userLikeDocSnapshot = await getDoc(userLikeDocRef);


            if(userLikeDocSnapshot.exists()) {
                // the user liked the post
                await deleteDoc(userLikeDocRef);

                // atualiza o contador de curtidas do post
                const postDocRef = doc(firestore, 'posts', id);
                const postDocSnapshot = await getDoc(postDocRef);

                if(postDocSnapshot.exists()){
                    const currentLikes = postDocSnapshot.data().likes;

                    await updateDoc(postDocRef, {
                        likes: currentLikes - 1
                    });

                    // atualiza a interface com os valores atualizados
                    setIsLiked(false);
                    setLikes(currentLikes - 1)
                }

            } else {
                // o usuário não curtiu o post, então curta
                await setDoc(userLikeDocRef, { 
                    userId: user.id,
                    postId: id, 
                })

                // atualiza o contador de curtidas do post
                const postDocRef = doc(firestore, 'posts', id);
                const postDocSnapshot = await getDoc(postDocRef);

                if(postDocSnapshot.exists()) {
                    const currentLikes = postDocSnapshot.data().likes;

                    await updateDoc(postDocRef, {
                        likes: currentLikes + 1
                    });

                    setIsLiked(true);
                    setLikes(currentLikes + 1);
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    // deleta o post que eu criei
    async function handleDeletePost(id){
        try {
            const firestore = getFirestore();
            const postDocRef = doc(firestore, 'posts', id);
            await deleteDoc(postDocRef);
        } catch (error) {
            console.log(error)
        }
    };
    

    return (
        <Container style={{elevation: RFValue(10)}}>
            <ContainerCard>

                    { user.id === data.owner &&
                        <TouchableOpacity
                            onPress={() => handleDeletePost(data.postId)}
                            style={{ position: 'absolute', top: 0, right: 0 }}
                        >
                            <MaterialIcons size={20} name='delete' />
                        </TouchableOpacity>
                    }


                <TouchableWithoutFeedback
                    // navagar para o perfil do dono do post
                    onPress={() => alert(data.owner)}
                >
                    <Header>
                        {data?.avatar ? (
                            <Avatar source={{ uri: data.avatar }} />
                        ) : (
                            <View style={{ 
                                width: RFValue(45), 
                                height: RFValue(45), 
                                borderWidth: 1,
                                borderColor: '#444', 
                                borderRadius: RFValue(24) 
                            }}/>
                        )}
                        <ViewName>
                            <Name> {data.name} </Name>
                            <Ministry> {data.ministry} </Ministry>
                        </ViewName>
                    </Header>
                </TouchableWithoutFeedback>
                

                {/* Agora tudo que for relacionado ao post sera feito junto,
                entao pra ca tem que vim todas as info do post junto com as info do dono do post */}
                <ContainerPost>

                    <Post>
                        <Content> { displayedText } </Content>
                        <ButtonMore
                            // abrir o mesmo modal igual ao botão de comentarios, onde o usuaro
                            // podera ler tudo caso seja grande, ver comentarios, e comentar tbm
                            onPress={() => alert('Modal comentarios e post completo')}
                        >
                            <More>ler mais</More>
                        </ButtonMore>
                    </Post>

                    <Buttons>
                        <ButtonLikeAndComment 
                            onPress={ () => handleUserLikePost(data.postId, user) } 
                        >
                            
                            <MaterialIcons 
                                size={RFValue(20)} 
                                name={ isLiked ? 'favorite' : 'favorite-outline' } 
                                color={theme.COLORS.RED} 
                            />
                            
                            <TextLikeAndComment> 
                                { formater.format( likes ) } 
                            </TextLikeAndComment>
                        </ButtonLikeAndComment>

                        <ButtonLikeAndComment onPress={() => alert('Modal comentarios e post completo')}>
                            <MaterialIcons size={RFValue(20)} name='forum' color={theme.COLORS.BLACK_500} />
                            <TextLikeAndComment> 
                                { formater.format(data.comments) }
                            </TextLikeAndComment>
                        </ButtonLikeAndComment>
                    </Buttons>

                </ContainerPost>
                {/*  */}

            </ContainerCard>
        </Container>
    )
}